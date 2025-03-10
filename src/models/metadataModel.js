const mongoose = require('mongoose');

const MetadataSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  type: {
    type: String,
  },
  mandatory: {
    type: String,
  },
  readOnly: {
    type: String,
  },
  active: {
    type: String,
  },
  repository: {
    type: Array,
  },
  application: {
    type: Array,
  },
  department: {
    type: Array,
  },
  organization: {
    type: Array,
  },
});

module.exports = mongoose.model('Metadata', MetadataSchema);