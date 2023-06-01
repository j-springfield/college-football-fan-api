import express from 'express';
import rankingsController from '../controllers/rankingsController.js';

const router = express.Router();

router.get('/', rankingsController.getRankings);

export default router;