import express from 'express';
import teamsRoute from './routes/teams.js';

const app = express();

app.use('/api/teams', teamsRoute);

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});