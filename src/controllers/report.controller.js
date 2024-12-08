import logger from '../logs/logging.service.js';
import reportService from '../services/report.service.js';

async function getReport(req, res, next) {
    try {
        const { month, year } = req.query;
        const response = await reportService.getReport(month, year);

        logger.info(
            `GET /register?month=${response.mes.join(',')}` +
                `&year=${response.ano.join(',')} - ` +
                `Relatório obtido com sucesso.`,
        );

        return res.status(200).send(response);
    } catch (err) {
        next(err);
    }
}

export default {
    getReport,
};
