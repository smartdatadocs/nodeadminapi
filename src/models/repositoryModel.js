const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/db');

// Define the Repository model
class Repository extends Model {}

Repository.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false, // Equivalent to `required: true` in Mongoose
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false, // Equivalent to `required: true` in Mongoose
    },
    application: {
      type: DataTypes.STRING,
      allowNull: false, // Equivalent to `required: true` in Mongoose
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false, // Equivalent to `required: true` in Mongoose
    },
    organization: {
      type: DataTypes.STRING,
      allowNull: false, // Equivalent to `required: true` in Mongoose
    },
  },
  {
    sequelize,
    modelName: 'Repository', // Name of the model
  }
);

// Sync the model with the database
(async () => {
  await sequelize.sync({ alter: true }); // Use `alter: true` to update the schema without losing data
  console.log('Repository model synced with SQLite');
})();

module.exports = Repository;