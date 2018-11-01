module.exports={
    getFriends: (req, res) => {
        console.log(req)
        const db=req.app.get('db')
        db.allPeople([req.session.user.user_id])
        .then((listofFriends) => {
            console.log("made it out of the database")
            console.log("this is friendsList", listofFriends)
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
        .then(console.log)
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
    addFriend:(req,res) => {

        console.log("this is session info,",req.session)
        const db=req.app.get('db')
        db.addFriend([req.body, req.session.auth_id])
    }
}