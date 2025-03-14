const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const dataRoutes = require('./routes/dataRoutes');
const metadataRoutes = require('./routes/metadataRoutes');
const onboardRoute = require('./routes/onboard');



dotenv.config();
console.log('ATLAS_PUBLIC_KEY:', process.env.ATLAS_PUBLIC_KEY);
console.log('ATLAS_PRIVATE_KEY:', process.env.ATLAS_PRIVATE_KEY);
console.log('ATLAS_PROJECT_ID:', process.env.ATLAS_PROJECT_ID);

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', dataRoutes);
app.use('/api/metadata', metadataRoutes);
app.use('/onboard', onboardRoute);


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});