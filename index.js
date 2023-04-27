import express from 'express';
import winston from 'winston';
import cors from 'cors';
import AccountRouter from './routes/account.route.js';
import { promises as fs } from 'fs';
const { readFile, writeFile } = fs;

global.fileName = 'accounts.json';

const { printf, timestamp, label, combine } = winston.format;

const myFormat = printf(({ timestamp, label, level, message }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

global.logger = winston.createLogger({
  level: 'silly',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'log/my-bank-api.log' }),
  ],
  format: combine(
    label({ label: 'my-bank-api' }),
    timestamp({ format: 'DD/MM/YYYY HH:mm' }),
    myFormat
  ),
});

const app = express();
app.use(express.json());
app.use(cors());
app.use('/account', AccountRouter);

app.listen(3000, async () => {
  try {
    await readFile(global.fileName);
    logger.info('API Started!');
  } catch (err) {
    const initialJson = {
      nextId: 1,
      accounts: [],
    };
    await writeFile(global.fileName, JSON.stringify(initialJson, null, 2))
      .then(() => {
        logger.info('API Started and File Created');
      })
      .catch((err) => {
        logger.error(err);
      });
  }
});
