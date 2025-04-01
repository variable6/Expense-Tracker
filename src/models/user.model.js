
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name']
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: [true, 'User already exists with this email']
  },
  password: {
    type: String,
    required: [true, 'Please provide a password']
  }
}, { timestamps: true, collection: 'users' });

module.exports = mongoose.model('User', UserSchema);