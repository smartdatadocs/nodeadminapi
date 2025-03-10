const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  organization: {
    type: String,
    required: true,
  },
  
});

module.exports = mongoose.model('Application', ApplicationSchema);