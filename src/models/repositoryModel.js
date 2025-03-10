const mongoose = require('mongoose');

const RepositorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  application: {
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

module.exports = mongoose.model('Repository', RepositorySchema);