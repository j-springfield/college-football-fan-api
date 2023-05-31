import express from 'express';
import teamsController from '../controllers/teamsController.js';

const router = express.Router();

router.get('/', teamsController.getTeams);
router.get('/roster', teamsController.getRoster);

export default router;