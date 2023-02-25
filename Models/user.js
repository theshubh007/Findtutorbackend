const mongoose = require("mongoose");
const Userschema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    Select: false,
  },
  phone: {
    type: Number,
    required: true,
    length: 10,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Users = mongoose.model('User', Userschema);
module.exports = Users;