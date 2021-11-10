//Models handle all the Schema required in the project
//handles the information and exchanges it with the db which stores all of the information.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  surname: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
