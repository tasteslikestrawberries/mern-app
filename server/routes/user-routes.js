//using express to define some routes that will live on the local port
const express = require("express");
const router = express.Router();

//importing mongoose model
const User = require("../models/user-model");

//routes boilerplate - routes are defined as path.typeofhttpmethod:

//POST ROUTE & CONTROLLER
router.route("/new").post(function posty(req, res) {
  //frontend sends request to backend and sends it with a body atribute that contains data that is to be posted to db
  const newUser = new User(req.body);
  //contacting database and saving new user instance - the User that is sent back from MongoDB will have an ID
  newUser
    .save()
    .then((user) => res.json(user)) //filling response json with User
    .catch((err) => res.status(400).json("Error! " + err)); //if the instance gets rejected by db
});

//GET ROUTE & CONTROLLER
router.route("/get").get(function getty(req, res) {
  // using .find() without a parameter will match on all user instances
  User.find() //returns a promise
    .then(function thenny(queryResult) {
      console.log("poslije");
      const users = queryResult.slice(1); //because 1st result is not a user
      res.json(users);
    })
    .catch(function catchy(err) {
      res.status(400).json("Error! " + err);
    });

  console.log("prije");
});

//DELETE ROUTE & CONTROLLER
router.route("/delete").delete(function deletey(req, res) {
  const id = req.body.id;

  User.deleteOne({ _id: id }) //User.deleteOne is a promise ; deleteOne is mongoose method; _id:id - sending in form of an object so a param can be left out if needed
    //after User.deleteOne is completed
    .then(function promiseResolved(result) {
      res.status(200).json({ id: id, message: "User successsfully deleted" }); // .json(JSON.stringify({id:id, message:'something'}))**notsure
    })
    .catch(function promiseRejected(err) {
      res.status(400).json("Error! " + err);
    });
});

module.exports = router;
