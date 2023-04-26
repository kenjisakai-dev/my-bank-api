import express from 'express';
import { promises as fs } from 'fs';
const { readFile, writeFile } = fs;

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    let account = req.body;
    const data = JSON.parse(await readFile('accounts.json'));

    account = { id: ++data.nextId, ...account };
    data.accounts.push(account);

    await writeFile('accounts.json', JSON.stringify(data, null, 2));
    res.send(account);
  } catch (err) {
    next(err);
  }
});

export default router;
