import express from 'express';
import teamsRoute from './routes/teams.js';
import conferencesRoute from './routes/conferences.js';
import coachesRoute from './routes/coaches.js';

const app = express();

app.use('/api/teams', teamsRoute);
app.use('/api/conferences', conferencesRoute);
app.use('/api/coaches', coachesRoute);

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});