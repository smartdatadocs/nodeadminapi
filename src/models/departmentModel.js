const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/db');

// Define the Department model
class Department extends Model {}

Department.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false, // Equivalent to `required: true` in Mongoose
    },
    description: {
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
    modelName: 'Department', // Name of the model
  }
);

// Sync the model with the database
(async () => {
  await sequelize.sync({ alter: true }); // Use `alter: true` to update the schema without losing data
  console.log('Department model synced with SQLite');
})();

module.exports = Department;