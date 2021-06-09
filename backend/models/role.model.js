const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roleSchema = new Schema({
  
  description: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  }, 

}, {
  timestamps: true,
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;