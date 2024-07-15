// models/User.js

const mongoose = require('mongoose');

// Define the schema for the User model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
  // Add more fields as needed
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

// Export the model to use it in other parts of the application
module.exports = User;
