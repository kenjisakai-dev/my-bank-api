import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocument } from './docs/doc.js';
import { graphqlHTTP } from 'express-graphql';
import accountRouter from './src/routes/account.route.js';
import Schema from './src/schema/index.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/account', accountRouter);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(
    '/graphql',
    graphqlHTTP({
        schema: Schema,
        graphiql: true,
    }),
);

app.listen(3030, () => {
    console.log('API Started!');
});
