const Metadata = require('../models/metadataModel');

exports.getAllMetadata = async (req, res) => {
  try {
    const metadata = await Metadata.find();
    res.status(200).json(metadata);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.saveMetadata = async (req, res) => {
    try {
      const metadataArray = req.body; // Directly use the request body as the array of metadata
  
      const results = await Promise.all(metadataArray.map(async (metadata) => {
        if (metadata._id) {
          // Update existing metadata
          return await Metadata.findByIdAndUpdate(metadata._id, metadata, { new: true });
        } else {
          // Insert new metadata
          const newMetadata = new Metadata(metadata);
          return await newMetadata.save();
        }
      }));
  
      res.status(201).json(results);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };