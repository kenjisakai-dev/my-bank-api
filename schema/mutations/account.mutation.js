import { GraphQLBoolean, GraphQLInt } from 'graphql';
import Account from '../types/account.js';
import AccountInput from '../types/accountInput.js';
import accountResolver from '../resolvers/account.resolver.js';

const accountMutation = {
  createAccount: {
    type: Account,
    args: {
      account: {
        name: 'account',
        type: AccountInput,
      },
    },
    resolve(_, args) {
      return accountResolver.createAccount(args.account);
    },
  },
  updateAccount: {
    type: Account,
    args: {
      account: {
        name: 'account',
        type: AccountInput,
      },
    },
    resolve(_, args) {
      return accountResolver.updateAccount(args.account);
    },
  },
  updateBalance: {
    type: Account,
    args: {
      account: {
        name: 'account',
        type: AccountInput,
      },
    },
    resolve(_, args) {
      return accountResolver.updateBalance(args.account);
    },
  },
  deleteAccount: {
    type: GraphQLBoolean,
    args: {
      id: {
        name: 'id',
        type: GraphQLInt,
      },
    },
    resolve(_, args) {
      accountResolver.deleteAccount(args.id);
    },
  },
};

export default accountMutation;
