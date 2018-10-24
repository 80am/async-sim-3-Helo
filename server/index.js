require('dotenv').config()
const express = require('express')
const axios = require('axios')
const massive = require('massive')
const bodyParser = require('body-parser')
const ctrl = require('./controller')
const session = require('express-session')

const app = express()

const {
    SERVER_PORT,
    SESSION_SECRET,
    REACT_APP_DOMAIN,
    REACT_APP_CLIENT_ID,
    CLIENT_SECRET,
    CONNECTION_STRING,
} = process.env


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true                    
}))
//-----------------------------------------------------------------------------------------------------------------------------
app.get('/auth/callback', async (req,res)=>{
    console.log("we got to server")
    //code ---> req.query.code
try{
    let payload ={
        client_id: REACT_APP_CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: req.query.code,
        grant_type: 'authorization_code',
        redirect_uri:`http://${req.headers.host}/auth/callback`
    }

    //post request with code for token
    let tokenRes = await axios.post(`https://${REACT_APP_DOMAIN}/oauth/token`, payload)
    let userRes = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${tokenRes.data.access_token}`)
    // console.log("my info", userRes.data)
    const db = req.app.get('db')
    const {sub} = userRes.data
    // console.log(sub)
    let foundUser = await db.find_user([sub])
    console.log("looking for user")
    if (foundUser[0]) {
        req.session.user = foundUser[0]
        console.log("found user and on session")
    }else {
        let createdUser = await db.create_user([sub])
        req.session.user = createdUser[0]
        console.log("didnt find user but created it")
    }
    res.redirect('/#/Dashboard')
}
catch(error){
    console.log(error)
}
})

//----------------------------------------------------------------------------------------------------

app.get('/api/getfriendslist', ctrl.getFriends)
// app.post('/api/userlogin', ctrl.uLogin)
// app.get('/api/getuserdata', ctrl.userData)
// app.post('/api/filterstuff', ctrl.filterInfo)
// app.post('/api/userregister', ctrl.userregister)
// app.post('/api/complete', ctrl.userComplete)
// app.delete(`/api/dashboard/:id`, ctrl.deleteStuff)
// app.put('/api/shelf/:id/bin/:bin', ctrl.deleteProduct)


massive(CONNECTION_STRING).then(connection => {
    app.set('db', connection)
    console.log("DB is connected")  
})


app.listen(SERVER_PORT, () => {
    console.log(`Mr Smith lives on ${SERVER_PORT}`)
})