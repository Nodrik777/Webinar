const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  f_name: { type: String, required: true},
  l_name: { type: String, required: true},
  email: { type: String, required: true},
  phone_number: { type: String, required: true},
  hashed_pass: { type: String, required: true},
  address: { type: String, required: true},

}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;