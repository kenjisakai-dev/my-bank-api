import { GraphQLString } from 'graphql';
import reportType from '../types/report.type.js';
import reportService from '../../services/report.service.js';

const reportQueries = {
    getReport: {
        type: reportType,
        args: {
            month: {
                type: GraphQLString,
            },
            year: {
                type: GraphQLString,
            },
        },
        resolve: async (_, args) =>
            await reportService.getReport(args.month, args.year),
    },
};

export default reportQueries;
