import express from 'express';
import registerController from '../controllers/register.controller.js';

const router = express.Router();

router.post('/', registerController.createRegister);
router.patch('/', registerController.updateRegister);
router.get('/:id', registerController.getRegister);

export default router;
