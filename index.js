import express from 'express';
import winston from 'winston';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import AccountRouter from './routes/account.route.js';
import { swaggerDocument } from './docs/doc.js';
import { promises as fs } from 'fs';
const { readFile, writeFile } = fs;
import { buildSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';
import AccountService from './services/account.service.js';

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

const schema = buildSchema(`
  type Account {
    id: Int
    name: String
    balance: Float
  }
  type Query {
    getAccounts: [Account]
    getAccount(id: Int): Account
  }
  input AccountInput {
    id: Int
    name: String
    balance: Float
  }
  type Mutation {
    createAccount(account: AccountInput): Account
    deleteAccount(id: Int): Boolean
    updateAccount(account: AccountInput): Account
  }
`);

const root = {
  getAccounts: () => AccountService.getAccounts(),
  getAccount(args) {
    return AccountService.getAccount(args.id);
  },
  createAccount({ account }) {
    return AccountService.createAccount(account);
  },
  deleteAccount(args) {
    return AccountService.deleteAccount(args.id);
  },
  updateAccount({ account }) {
    return AccountService.updateAccount(account);
  },
};

const app = express();
app.use(express.json());
app.use(cors());
app.use('/account', AccountRouter);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

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
