//using express to define some routes that will live on the local port
const express = require('express');
const router = express.Router();

//importing mongoose model
const User = require('../models/user-model');

//const { getUsers, createUser, deleteUser } = require('../controllers/user-controller');

//routes boilerplate - routes are defined as path.typeofhttpmethod:

//frontend sends request to backend and sends it with a body atribute that contains data that is to be posted to db
router.route('/new').post((req, res) => {
    const newUser = new User(req.body)
//contacting database and saving new user instance - the User that is sent back from MongoDB will have an ID
    newUser.save()
        .then(user => res.json(user)) //filling response json with User
        .catch(err => res.status(400).json("Error! " + err)) //if the instance gets rejected by db
})

router.route('/').get()

router.route('/delete/:id').delete((req, res) => {
    User.deleteOne({ _id: req.params.id })
        .then(success => res.json('Success! User deleted.'))
        .catch(err => res.status(400).json('Error! ' + err))
})


module.exports = router