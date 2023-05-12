import AccountService from '../services/account.service.js';

async function createAccount(req, res, next) {
  try {
    const account = req.body;

    if (!account.name || account.balance == null) {
      throw new Error(`Name e Balance são obrigatórios.`);
    }

    res.send(await AccountService.createAccount(account));
    logger.info(`POST /account - ${JSON.stringify(account)}`);
  } catch (err) {
    next(err);
  }
}

async function getAccounts(req, res, next) {
  try {
    res.send(await AccountService.getAccounts());
    logger.info(`GET /account`);
  } catch (err) {
    next(err);
  }
}

async function getAccount(req, res, next) {
  try {
    res.send(await AccountService.getAccount(req.params.id));
    logger.info(`GET /account/${req.params.id}`);
  } catch (err) {
    next(err);
  }
}

async function deleteAccount(req, res, next) {
  try {
    await AccountService.deleteAccount(req.params.id);

    res.send(`O ID ${req.params.id} foi deletado com sucesso.`);
    logger.info(`DELETE /account/${req.params.id}`);
  } catch (err) {
    next(err);
  }
}

async function updateAccount(req, res, next) {
  try {
    const account = req.body;

    if (account.id == null || !account.name || account.balance == null) {
      throw new Error(`ID, Name e Balance são obrigatórios.`);
    }

    res.send(await AccountService.updateAccount(account));
    logger.info(`PUT /account - ${JSON.stringify(account)}`);
  } catch (err) {
    next(err);
  }
}

async function updateBalance(req, res, next) {
  try {
    const account = req.body;

    if (account.id == null || account.balance == null) {
      throw new Error(`ID e Balance são obrigatórios.`);
    }

    res.send(await AccountService.updateBalance(account));
    logger.info(`PATCH /account/updateBalance - ${JSON.stringify(account)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createAccount,
  getAccounts,
  getAccount,
  deleteAccount,
  updateAccount,
  updateBalance,
};
