import axios from 'axios';
import express from 'express';
import config from './config.js';
const app = express();

const API_KEY = config.apiKey;

app.get('/api/teams', async (req, res) => {
    try {
        const response = await axios.get('https://api.collegefootballdata.com/teams', {
            headers: {
                Authorization: `Bearer ${API_KEY}`
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to make the request to get team data.' });
    }
});

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});