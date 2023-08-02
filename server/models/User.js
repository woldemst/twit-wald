const mongoose = require("mongoose");

const userShema = new mongoose.Schema({
  name: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  birthYear: { type: Number, required: true },
  birthMonth: { type: String, required: true },
  birthDay: { type: Number, required: true },
  joinedDate: { type: String, required: true},
});

module.exports = mongoose.model("User", userShema);
