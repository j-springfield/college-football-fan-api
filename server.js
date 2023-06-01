import express from 'express';
import cors from 'cors';
import teamsRoute from './routes/teams.js';
import conferencesRoute from './routes/conferences.js';
import coachesRoute from './routes/coaches.js';
import rankingsRoute from './routes/rankings.js';

const app = express();
app.use(cors());
const PORT = 8080;

app.use('/api/teams', teamsRoute);
app.use('/api/conferences', conferencesRoute);
app.use('/api/coaches', coachesRoute);
app.use('/api/rankings', rankingsRoute);

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:8080');
});