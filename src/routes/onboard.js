const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/onboard', async (req, res) => {
    const { username, password, clusterName } = req.body;

    if (!username || !password || !clusterName) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const publicKey = process.env.ATLAS_PUBLIC_KEY;
    const privateKey = process.env.ATLAS_PRIVATE_KEY;
    const projectId = process.env.ATLAS_PROJECT_ID;

    // Dynamically import digest-fetch
    const { default: DigestFetch } = await import('digest-fetch');

    const client = new DigestFetch(publicKey, privateKey, { algorithm: 'MD5' });

    const clusterConfig = {
        name: clusterName,
        providerSettings: {
            providerName: 'AWS',
            instanceSizeName: 'M10', // M10 for the specified cluster type
            regionName: 'US_EAST_1' // Default region
        },
        clusterType: 'REPLICASET'
    };

    try {
        const response = await client.fetch(
            `https://cloud.mongodb.com/api/atlas/v1.0/groups/${projectId}/clusters`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(clusterConfig)
            }
        );
        const responseData = await response.json();

        if (!response.ok) {
            console.error('MongoDB Atlas API Error:', responseData);
            throw new Error(`Request failed with status ${response.status}`);
        }

        const newClusterUri = `mongodb+srv://${username}:${password}@${clusterName}.mongodb.net/?retryWrites=true&w=majority`;

        res.status(200).json({ message: 'Successfully created and connected to the new MongoDB cluster', uri: newClusterUri });
    } catch (error) {
        console.error('Error creating MongoDB cluster:', error.message);
        console.error('Stack trace:', error.stack);
        res.status(500).json({ 
            error: 'Failed to create the new MongoDB cluster', 
            details: error.message,
            stack: error.stack 
        });
    }
});

module.exports = router;