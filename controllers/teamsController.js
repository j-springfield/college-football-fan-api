import axios from 'axios';
import config from '../config.js';

const API_KEY = config.apiKey;

async function getTeams(req, res) {
    try {
        const response = await axios.get('https://api.collegefootballdata.com/teams', {
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
        res.status(500).json({ error: 'Failed to make the request to get team data.' });
    }
}



export default {
    getTeams
}