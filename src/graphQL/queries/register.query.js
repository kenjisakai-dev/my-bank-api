import { GraphQLInt } from 'graphql';
import registerType from '../types/register.type.js';
import registerService from '../../services/register.service.js';

const registerQueries = {
    getRegister: {
        type: registerType,
        args: {
            id: {
                name: 'id',
                type: GraphQLInt,
            },
        },
        resolve: async (_, args) => await registerService.getRegister(args.id),
    },
};

export default registerQueries;
