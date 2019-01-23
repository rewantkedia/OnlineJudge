const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  displayname: {
    type: String,
    default: "The man has no name"
  },
  email: {
    type: String,
    default: "NA"
  },
  institution: {
    type: String,
    default: "NA"
  },
  age: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    default: "normal_user"
  },
  photo: {
    type: String,
    default: "some_path"
  }
});

const User = mongoose.model("user", UserSchema);
module.exports = User;
