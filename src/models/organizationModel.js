const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/db');

// Define the Organization model
class Organization extends Model {}

Organization.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false, // Equivalent to `required: true` in Mongoose
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false, // Equivalent to `required: true` in Mongoose
    },
  },
  {
    sequelize,
    modelName: 'Organization', // Name of the model
  }
);

// Sync the model with the database
(async () => {
  await sequelize.sync({ alter: true }); // Use `alter: true` to update the schema without losing data
  console.log('Organization model synced with SQLite');
})();

module.exports = Organization;