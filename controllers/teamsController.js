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

async function getRoster(req, res) {
    try {
        if (!req.query.team || !req.query.year) {
            throw new Error('Either the team or the year is missing from the query parameters for the team roster endpoint.');
        }

        const response = await axios.get('https://api.collegefootballdata.com/roster', {
            headers: {
                Authorization: `Bearer ${API_KEY}`
            },
            params: {
                team: req.query.team.toString(),
                year: req.query.year.toString()
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to make the request to get team roster data.' });
    }
}

export default {
    getTeams,
    getRoster
}