import express from 'express';
import teamsController from '../controllers/teamsController.js';

const router = express.Router();

router.get('/', teamsController.getTeams);

export default router;