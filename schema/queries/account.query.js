import { GraphQLList } from 'graphql';
import Account from '../types/account.js';
import AccountService from '../../services/account.service.js';

const accountQueries = {
  getAccounts: {
    type: new GraphQLList(Account),
    resolve: () => AccountService.getAccounts(),
  },
};

export default accountQueries;
