const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

// Initialize Sequelize with SQLite
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.SQLITE_DB_PATH || './database.sqlite', // Use the path from the environment variable
  logging: console.log, // Enable logging (optional)
});

// Test the connection
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('SQLite connected');
    
    // Sync the database (create tables if they don't exist)
    await sequelize.sync({ alter: true }); // Use `alter: true` to update the schema without losing data
    console.log('Database synced');
  } catch (error) {
    console.error('SQLite connection error:', error);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };