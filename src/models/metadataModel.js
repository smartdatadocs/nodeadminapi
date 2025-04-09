const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/db');

// Define the Metadata model
class Metadata extends Model {}

Metadata.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mandatory: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    repository: {
      type: DataTypes.JSON, // Store arrays as JSON
      allowNull: true,
    },
    applications: {
      type: DataTypes.JSON, // Store arrays as JSON
      allowNull: true,
    },
    departments: {
      type: DataTypes.JSON, // Store arrays as JSON
      allowNull: true,
    },
    organizations: {
      type: DataTypes.JSON, // Store arrays as JSON
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Metadata',
  }
);

// Sync the model with the database
(async () => {
  await sequelize.sync({ alter: true }); // Use `alter: true` to update the schema without losing data
  console.log('Metadata model synced with SQLite');
})();

module.exports = Metadata;