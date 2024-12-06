import express from 'express';
import logger from '../logs/logging.service.js';
import accountController from '../controllers/account.controller.js';

const router = express.Router();

router.post('/', accountController.createAccount);
router.get('/', accountController.getAccounts);
router.get('/:id', accountController.getAccount);
router.patch('/', accountController.updateAccount);

router.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
    res.status(400).send({ erro: err.message });
});

export default router;
