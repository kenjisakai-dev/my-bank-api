import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocument } from './docs/doc.js';
import { graphqlHTTP } from 'express-graphql';
import registerRouter from './src/routes/register.route.js';
import reportRouter from './src/routes/report.route.js';
import Schema from './src/graphQL/index.js';
import logger from './src/logs/logging.service.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/register', registerRouter);
app.use('/report', reportRouter);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(
    '/graphQL',
    graphqlHTTP({
        schema: Schema,
        graphiql: true,
    }),
);

app.use((err, req, res, next) => {
    logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
    res.status(400).send({ erro: err.message });
});

app.listen(3030, () => {
    console.log('API Started!');
    console.log('Swagger: http://localhost:3030/swagger');
    console.log('Swagger: http://localhost:3030/graphQL');
});
