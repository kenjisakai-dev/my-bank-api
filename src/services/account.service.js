import accountRepository from '../repositories/account.repository.js';

async function createAccount(account) {
    return await accountRepository.insertAccount(account);
}

async function getAccounts() {
    return await accountRepository.getAccounts();
}

async function getAccount(id) {
    return await accountRepository.getAccount(id);
}

async function updateAccount(account) {
    return await accountRepository.updateAccount(account);
}

export default {
    createAccount,
    getAccounts,
    getAccount,
    updateAccount,
};
