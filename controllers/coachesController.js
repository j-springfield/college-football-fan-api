import http from '../utils/http.js';

async function getCoaches(req, res) {
    if (!req.query.team) throw new Error('The team is missing from the query parameters for the coaches endpoint.');
    const response = await http.get(res, 'coaches', req);
    res.json(response.data);
}

export default {
    getCoaches
}