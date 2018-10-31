module.exports={
    getFriends: (req, res) => {
        const db=req.app.get('db')
        db.allPeople([req.session.user.auth_id])
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
    }
}