const Metadata = require('../models/metadataModel');

exports.getAllMetadata = async (req, res) => {
  try {
    const metadata = await Metadata.findAll(); // Use Sequelize's findAll() method
    res.status(200).json(metadata);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.saveMetadata = async (req, res) => {
  try {
    const metadataArray = req.body; // Directly use the request body as the array of metadata

    const results = await Promise.all(
      metadataArray.map(async (metadata) => {
        if (metadata.id) {
          // Update existing metadata
          const existingMetadata = await Metadata.findByPk(metadata.id); // Find by primary key
          if (existingMetadata) {
            return await existingMetadata.update(metadata); // Update the record
          } else {
            throw new Error(`Metadata with id ${metadata.id} not found`);
          }
        } else {
          // Insert new metadata
          return await Metadata.create(metadata); // Create a new record
        }
      })
    );

    res.status(201).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};