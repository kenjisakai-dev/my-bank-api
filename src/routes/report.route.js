import express from 'express';
import reportController from '../controllers/report.controller.js';

const router = express.Router();

router.get('/', reportController.getReport);

export default router;
