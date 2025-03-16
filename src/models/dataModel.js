const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the nested schema for children
const childSchema = new Schema({
    key: String,
    type: String,
    label: String,
    description: String,
    data: {
      name: String,
      description: String,
      level: Number
    },
    children: [this] // Recursive schema definition for nested children
  });
  
  // Define the main schema
  const dataSchema = new Schema({
    key: String,
    type: String,
    label: String,
    description: String,
    data: {
      name: String,
      description: String,
    },
    children: [childSchema] // Use the nested schema here
  });

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;