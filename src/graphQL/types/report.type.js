import {
    GraphQLObjectType,
    GraphQLList,
    GraphQLInt,
    GraphQLString,
    GraphQLFloat,
} from 'graphql';

const reportType = new GraphQLObjectType({
    name: 'reportType',
    fields: () => ({
        ano: { type: new GraphQLList(GraphQLInt) },
        mes: { type: new GraphQLList(GraphQLString) },
        receita: { type: GraphQLFloat },
        despesa: { type: GraphQLFloat },
        balanco: { type: GraphQLFloat },
        cartao: { type: GraphQLFloat },
        receitas: { type: new GraphQLList(categoryType) },
        despesas: { type: new GraphQLList(categoryType) },
    }),
});

const categoryType = new GraphQLObjectType({
    name: 'categoryType',
    fields: () => ({
        categoria: { type: GraphQLString },
        valor: { type: GraphQLFloat },
    }),
});

export default reportType;
