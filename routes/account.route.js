import express from 'express';
import { promises as fs } from 'fs';
const { readFile, writeFile } = fs;

global.fileName = 'accounts.json';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    let account = req.body;
    const data = JSON.parse(await readFile(global.fileName));

    account = { id: data.nextId++, ...account };
    data.accounts.push(account);

    await writeFile(global.fileName, JSON.stringify(data, null, 2));
    res.send(account);
  } catch (err) {
    res.status(400).send({ erro: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const data = JSON.parse(await readFile(global.fileName));
    delete data.nextId;
    res.send(data);
  } catch (err) {
    res.status(400).send({ erro: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const data = JSON.parse(await readFile(global.fileName));
    const account = data.accounts.find(
      (account) => account.id === parseInt(req.params.id)
    );
    res.send(account);
  } catch (err) {
    res.status(400).send({ erro: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const data = JSON.parse(await readFile(global.fileName));
    data.accounts = data.accounts.filter(
      (account) => account.id !== parseInt(req.params.id)
    );
    await writeFile(global.fileName, JSON.stringify(data, null, 2));
    res.send(`O ID ${req.params.id} foi deletado com sucesso.`);
  } catch (err) {
    res.status(400).send({ erro: err.message });
  }
});

export default router;
