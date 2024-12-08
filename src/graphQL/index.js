import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import registerQueries from './queries/register.query.js';
import reportQueries from './queries/report.query.js';

const Schema = new GraphQLSchema({
    types: null,
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            ...registerQueries,
            ...reportQueries,
        },
    }),
});

export default Schema;
