module.exports={
    getFriends: (req, res) => {
        // console.log(req)
        const db=req.app.get('db')
        db.allPeople([req.session.user.user_id,req.session.user.user_id,req.session.user.user_id])
        .then((listofFriends) => {
            console.log("made it out of the database")
            // console.log("this is friendsList", listofFriends)
            res.status(200).send(listofFriends)
        })
    },
    
    numberOfPeople: (req, res) => {
        const db=req.app.get('db')
        db.numberOfPeople([])
        .then((numberOfPeople) => {
            res.status(200).send(numberOfPeople)
        }) 
    },
    userspages: (req, res) => {
        // console.log(req.params.page)
        var offset=((4*req.params.page)-4)
        const db=req.app.get('db')
        db.userspages([offset])
        // .then(console.log)
    },

    searchFirstname: (req,res) =>{
        var x = `%${req.query.filterInput}%`
        console.log("this is the req", x)
        console.log("filterSelect:", req.query.filterSelect, "filterInput:", req.query.filterInput)
        const db= req.app.get('db')
        db.filterFirstname([ x ])
        .then((filteredPeople) => {
            res.status(200).send(filteredPeople)
        // console.log("made it out of the data base with", filterPeople)
        })
    },
    searchLastname: (req,res) =>{
        var x = `%${req.query.filterInput}%`
        console.log("this is the req", x)
        console.log("filterSelect:", req.query.filterSelect, "filterInput:", req.query.filterInput)
        const db= req.app.get('db')
        db.filterLastname([ x ])
        .then((filteredPeople) => {
            res.status(200).send(filteredPeople)
        // console.log("made it out of the data base with", filterPeople)
        })
    },
    geteveryoneElse:(req, res) => {
        // console.log("this is the session",req.session)
        const db=req.app.get('db')
        db.everyoneElse([req.session.user.user_id,req.session.user.user_id,req.session.user.user_id])
        .then((notmyFriends) => {
            res.status(200).send(notmyFriends)
            // console.log("not my friends",notmyFriends)
        })
    },
    myfriends:(req, res) => {
        const db=req.app.get('db')
        db.myfriends([req.session.user.user_id])
        .then((myfriends) => {
            res.status(200).send(myfriends)
            // console.log("these are my friends:", myfriends)
        })
    },
    deleteFriend:(req, res) => {
        const db=req.app.get('db')
        console.log("session id and body",req.session.user.user_id, req.params.id)
        db.deleteFriend([req.session.user.user_id, req.params.id])
        .then(()=>{
            db.deleteFriend([req.params.id, req.session.user.user_id])
            .then((deletedFriend)=>{
                res.status(200).send(deletedFriend)
            })
        })
    },
    addFriend:(req,res) => {
        // console.log("this is session info,", req.session)
        console.log("session id and body",req.session.user.user_id, req.params.id)
        const db=req.app.get('db')
        db.addFriend([req.params.id, req.session.user.user_id])
        .then((addedFriend)=>{
            res.status(200).send(addedFriend)
        })
    },
    myinfo: (req, res) => {
        const db=req.app.get('db')
        db.myinfo([req.session.user.user_id])
        .then((myInfo) => {
            console.log('this is yourrr info::',myInfo)
            console.log('we got your info and headed back')
            res.status(200).send(myInfo)
        })
    },
    updateInfo: (req, res) => {
        console.log("this is the req bodyyy", req.body)
        const db=req.app.get('db')
        db.updateInfo([req.session.user.auth_id, 
                       req.body.firstname, 
                       req.body.lastname, 
                       req.body.gender, 
                       req.body.haircolor, 
                       req.body.eyecolor, 
                       req.body.hobby, 
                       req.body.birthday, 
                       req.body.birthmonth, 
                       req.body.birthyear, 
                       req.body.image,
                       req.session.user.user_id])
        .then(res.sendStatus(200))
    }
}