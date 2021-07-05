//using express to define some routes that will live on the local port
const express = require('express');
const router = express.Router();

//importing mongoose model
const User = require('../models/user-model');

//const { getUser, createUser, deleteUser } = require('../controllers/user-controller');

//routes boilerplate - routes are defined as path.typeofhttpmethod:
//POST ROUTE
router.route('/new').post( function posty(req, res) {
    //frontend sends request to backend and sends it with a body atribute that contains data that is to be posted to db
    const newUser = new User(req.body)
//contacting database and saving new user instance - the User that is sent back from MongoDB will have an ID
    newUser.save()
        .then(user => res.json(user)) //filling response json with User
        .catch(err => res.status(400).json("Error! " + err)) //if the instance gets rejected by db
})

//GET ROUTE
router.route('/get').get( function getty(req,res) {
    // using .find() without a parameter will match on all user instances
    User.find() //returns a promise
    .then(function thenny(queryResult) {
      console.log('poslije');
      const users = queryResult.slice(1);
      res.json(users)
    })
    .catch(function catchy(err) {
      res.status(400).json('Error! ' + err)
    })

    console.log('prije')
})

//DELETE ROUTE
router.delete('/user', async (req, res) => {
  const id = req.body.id;
  let user;

  try {
      user = await deleteUser(id);
  } catch(error) {
      res.status(503);
      res.send("Something went wrong")
  }

  res.status(200);
  res.send(user);
})


module.exports = router