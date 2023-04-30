import AccountRepository from '../repositories/account.repository.js';

async function createAccount(account) {
  return await AccountRepository.insertAccount(account);
}

async function getAccounts() {
  return await AccountRepository.getAccounts();
}

async function getAccount(id) {
  return await AccountRepository.getAccount(id);
}

async function deleteAccount(id) {
  await getAccount(id);
  await AccountRepository.deleteAccount(id);
}

async function updateAccount(account) {
  return await AccountRepository.updateAccount(account);
}

async function updateBalance(account) {
  const _account = await getAccount(account.id);
  _account.balance = account.balance;
  return await AccountRepository.updateAccount(_account);
}

export default {
  createAccount,
  getAccounts,
  getAccount,
  deleteAccount,
  updateAccount,
  updateBalance,
};
