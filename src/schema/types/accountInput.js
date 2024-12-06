import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLNonNull,
} from 'graphql';

export const CreateAccountInput = new GraphQLInputObjectType({
  name: 'CreateAccountInput',
  fields: () => ({
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
    balance: {
      type: GraphQLNonNull(GraphQLFloat),
    },
  }),
});

export const UpdateAccountInput = new GraphQLInputObjectType({
  name: 'UpdateAccountInput',
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLInt),
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
    balance: {
      type: GraphQLNonNull(GraphQLFloat),
    },
  }),
});

export const UpdateBalanceInput = new GraphQLInputObjectType({
  name: 'UpdateBalanceInput',
  fields: () => ({
    id: {
      type: GraphQLNonNull(GraphQLInt),
    },
    balance: {
      type: GraphQLNonNull(GraphQLFloat),
    },
  }),
});
