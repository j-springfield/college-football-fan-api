import express from 'express';
import conferencesController from '../controllers/conferencesController.js';

const router = express.Router();

router.get('/', conferencesController.getConferences);

export default router;