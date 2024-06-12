const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  }

});

userSchema.plugin(uniqueValidator);
const User = mongoose.model('User', userSchema);

module.exports = User;