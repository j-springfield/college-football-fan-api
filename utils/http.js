import axios from 'axios';
import config from '../config.js';

const BASE_URL = 'https://api.collegefootballdata.com';
const TIMEOUT_TIME = 5000;
const API_KEY = config.apiKey;

async function get(res, endpoint, req) {
    try {
        const response = await axios.get(`${BASE_URL}/${endpoint}`, {
            timeout: TIMEOUT_TIME,
            headers: {
                Authorization: `Bearer ${API_KEY}`
            },
            params: req.params,
        });
        return response;
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: `Failed to make the request to get data for endpoint: ${endpoint}`});
    }
}

export default {
    get
}