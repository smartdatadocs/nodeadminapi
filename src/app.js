const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db');
const dataRoutes = require('./routes/dataRoutes');
const metadataRoutes = require('./routes/metadataRoutes');
const Data = require('./models/dataModel'); // Import the Data model
const cors = require('cors');

dotenv.config();

const app = express();

app.use(cors());

// Middleware
app.use(express.json());

// Connect to SQLite and ensure the database is created
(async () => {
  try {
    await connectDB(); // Ensure the database connection is established
    console.log('Database connected successfully.');

    // Sync the database schema
    await Data.sync({ alter: true });
    console.log('Data table synced successfully.');

    // Insert default data if the table is empty
    const insertDefaultData = async () => {
      try {
        const count = await Data.count();
        console.log(`Data table record count: ${count}`);
        if (count === 0) {
          const defaultData = {
            key: "0",
            type: "org",
            label: process.env.ORG_NAME || "Default Label",
            description: process.env.DEFAULT_DESCRIPTION || "Default Description",
            data: {
              name: process.env.ORG_NAME || "Default Name",
              description: process.env.DEFAULT_DATA_DESCRIPTION || "Default Data Description",
            },
            children: [], // Empty children array
          };

          await Data.create(defaultData);
          console.log('Default data inserted into the "Data" table.');
        } else {
          console.log('The "Data" table already contains data.');
        }
      } catch (error) {
        console.error('Error inserting default data:', error.message);
      }
    };

    await insertDefaultData(); // Call the function to insert default data
  } catch (error) {
    console.error('Error during application startup:', error.message);
  }
})();

// Routes
app.use('/api', dataRoutes);
app.use('/api/metadata', metadataRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
console.log('SQLite URI for nodeAdminApi backend:', process.env.SQLITE_DB_PATH);
console.log('I am Node Admin Api App.js');
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});