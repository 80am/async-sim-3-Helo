module.exports={
    getFriends: (req, res) => {
        const db=req.app.get('db')
        db.allPeople([req.session.user.auth_id])
        .then((listofFriends) => {
            console.log("made it out of the database")
            console.log("this is the friendsList", listofFriends)
            res.status(200).send(listofFriends)
        })
    }
    
}