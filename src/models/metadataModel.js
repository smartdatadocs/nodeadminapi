const mongoose = require('mongoose');

const MetadataSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  displayName: {
    type: String,
  },
  type: {
    type: String,
  },
  mandatory: {
    type: String,
  },
  active: {
    type: Boolean,
  },
  repository: {
    type: Array,
  },
  applications: {
    type: Array,
  },
  departments: {
    type: Array,
  },
  organizations: {
    type: Array,
  },
});

module.exports = mongoose.model('Metadata', MetadataSchema);