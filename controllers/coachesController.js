import axios from 'axios';
import config from '../config.js';

const API_KEY = config.apiKey;

async function getCoaches(req, res) {
    if (!req.query.team) throw new Error('The team is missing from the query parameters for the coaches endpoint.');
    // const response = await http.get(res, 'coaches', req);
    try {
        const response = await axios.get('https://api.collegefootballdata.com/coaches', {
            timeout: 15000,
            headers: {
                Authorization: `Bearer ${API_KEY}`
            },
            params: {
                team: req.query.team?.toString(),
                year: req.query.year?.toString(),
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to make the request to get coaches data.' });
    }
}

export default {
    getCoaches
}