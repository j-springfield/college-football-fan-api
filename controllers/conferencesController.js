import http from '../utils/http.js';

async function getConferences(req, res) {
    console.log(req);
    const response = await http.get(res, 'conferences', req);
    res.json(response.data);
}

export default {
    getConferences
}