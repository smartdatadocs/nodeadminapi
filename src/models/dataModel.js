const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../config/db');

// Define the Data model
class Data extends Model {}
Data.init(
  {
    key: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    label: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    data: {
      type: DataTypes.JSON, // Store nested data as JSON
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Data',
  }
);

// Define the self-referential relationship for children
Data.hasMany(Data, {
  as: 'children', // Alias for the children
  foreignKey: 'parentId', // Foreign key in the child records
});
Data.belongsTo(Data, {
  as: 'parent', // Alias for the parent
  foreignKey: 'parentId', // Foreign key in the child records
});

// Sync the model with the database
(async () => {
  await sequelize.sync({ alter: true }); // Use `alter: true` to update the schema without losing data
  console.log('Data model synced with SQLite');
})();

module.exports = Data;