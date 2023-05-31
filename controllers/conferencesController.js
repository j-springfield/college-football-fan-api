import axios from 'axios';
import config from '../config.js';

const API_KEY = config.apiKey;

async function getConferences(req, res) {
    try {
        const response = await axios.get('https://api.collegefootballdata.com/conferences', {
            headers: {
                Authorization: `Bearer ${API_KEY}`
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to make the request to get team data.' });
    }
}

export default {
    getConferences
}