import axios from 'axios';
import config from '../config.js';

const API_KEY = config.apiKey;

async function getRankings(req, res) {
    try {
        const response = await axios.get('https://api.collegefootballdata.com/rankings', {
            headers: {
                Authorization: `Bearer ${API_KEY}`
            },
            params: {
                conference: req.query.conference?.toString()
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to make the request to get rankings data.' });
    }
}

export default {
    getRankings
}