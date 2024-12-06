import logger from '../logs/logging.service.js';
import accountService from '../services/account.service.js';

async function createAccount(req, res, next) {
    try {
        const account = req.body;
        const { name, balance } = account;

        if (!name == null || balance == null) {
            throw new Error('Nome e Balanço são obrigatórios.');
        }

        const response = await accountService.createAccount(account);

        logger.info('POST /account - Conta criada com sucesso.');

        return res.status(201).send(response);
    } catch (err) {
        next(err);
    }
}

async function getAccounts(req, res, next) {
    try {
        const response = await accountService.getAccounts();

        logger.info('GET /account - Contas obtidas com sucesso.');

        return res.status(200).send(response);
    } catch (err) {
        next(err);
    }
}

async function getAccount(req, res, next) {
    try {
        const response = await accountService.getAccount(req.params.id);

        logger.info('GET /account - Conta obtida com sucesso.');

        return res.status(200).send(response);
    } catch (err) {
        next(err);
    }
}

async function updateAccount(req, res, next) {
    try {
        const account = req.body;
        const { id, name, balance } = account;

        if (id == null || name == null || balance == null) {
            throw new Error('ID da conta, Nome e Balanço são obrigatórios.');
        }

        const response = await accountService.updateAccount(account);

        logger.info('PATCH /account - Conta atualizada com sucesso.');

        return res.status(200).send(response);
    } catch (err) {
        next(err);
    }
}

export default {
    createAccount,
    getAccounts,
    getAccount,
    updateAccount,
};
