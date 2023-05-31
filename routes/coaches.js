import express from 'express';
import coachesController from '../controllers/coachesController.js';

const router = express.Router();

router.get('/', coachesController.getCoaches);

export default router;