import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLFloat,
} from 'graphql';

const registerType = new GraphQLObjectType({
    name: 'RegisterType',
    fields: () => ({
        id: { type: GraphQLInt },
        year: { type: GraphQLInt },
        month: { type: GraphQLString },
        description: { type: GraphQLString },
        value: { type: GraphQLFloat },
        category: { type: GraphQLString },
        type: { type: GraphQLString },
    }),
});

export default registerType;
