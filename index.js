import express from 'express';
import AccountRouter from './routes/account.route.js';
import { promises as fs } from 'fs';
const { readFile, writeFile } = fs;

const app = express();
app.use(express.json());

app.use('/account', AccountRouter);

app.use((err, req, res, next) => {
  res.status(400).send({ erro: err.message });
});

app.listen(3000, async () => {
  try {
    await readFile('accounts.json');
    console.log('API Started!');
  } catch (err) {
    const initialJson = {
      nextId: 0,
      accounts: [],
    };
    await writeFile('accounts.json', JSON.stringify(initialJson, null, 2))
      .then(() => {
        console.log('API Started and File Created');
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
