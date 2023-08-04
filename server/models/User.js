const mongoose = require("mongoose");

const userShema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  birthYear: { type: Number, required: true },
  birthMonth: { type: String, required: true },
  birthDay: { type: Number, required: true },
  joinedDate: { type: String, required: true},
  bio: {type: String},
  link: {type: String},
  location: {type: String},
});

module.exports = mongoose.model("User", userShema);
