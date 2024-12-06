import { promises as fs } from 'fs';
const { readFile, writeFile } = fs;

// try {
//     await readFile(global.fileName);
//     logger.info('API Started!');
// } catch (err) {
//     const initialJson = {
//         nextId: 1,
//         accounts: [],
//     };
//     await writeFile(global.fileName, JSON.stringify(initialJson, null, 2))
//         .then(() => {
//             logger.info('API Started and File Created');
//         })
//         .catch((err) => {
//             logger.error(err);
//         });
// }

const fileName = 'accounts.json';

async function getContentFile() {
    return JSON.parse(await readFile(fileName));
}

async function insertAccount(account) {
    const lista = await getContentFile();

    const data = {
        id: lista.nextId++,
        name: account.name,
        balance: account.balance,
    };

    lista.accounts.push(data);

    await writeFile(fileName, JSON.stringify(lista, null, 2));

    return data;
}

async function getAccounts() {
    const lista = await getContentFile();
    return lista.accounts;
}

async function getAccount(id) {
    const lista = await getAccounts();

    const account = lista.find((account) => account.id === parseInt(id));

    if (!account) throw new Error('Conta não encontrada.');

    return account;
}

async function updateAccount(account) {
    const lista = await getContentFile();

    const index = lista.accounts.findIndex(
        (x) => x.id === parseInt(account.id),
    );

    if (index === -1) throw new Error('Conta não encontrada.');

    lista.accounts[index].name = account.name;
    lista.accounts[index].balance = account.balance;

    await writeFile(fileName, JSON.stringify(lista, null, 2));

    return lista.accounts[index];
}

export default {
    insertAccount,
    getAccounts,
    getAccount,
    updateAccount,
};
