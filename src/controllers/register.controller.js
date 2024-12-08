import logger from '../logs/logging.service.js';
import registerService from '../services/register.service.js';

async function createRegister(req, res, next) {
    try {
        const register = req.body;
        const { year, month, description, value, category, type } = register;

        if (
            !year ||
            !month ||
            !description ||
            value == null ||
            !category ||
            !type
        ) {
            throw new Error(
                'O Ano, Mês, Descrição, Valor, Categoria e Tipo são obrigatórios.',
            );
        }

        const response = await registerService.createRegister(register);

        logger.info('POST /register - Registro criado com sucesso.');

        return res.status(201).send(response);
    } catch (err) {
        next(err);
    }
}

async function updateRegister(req, res, next) {
    try {
        const register = req.body;
        const { id } = register;

        if (!id) {
            throw new Error('ID do registro é obrigatório.');
        }

        const response = await registerService.updateRegister(register);

        logger.info('PATCH /register - Registro atualizado com sucesso.');

        return res.status(200).send(response);
    } catch (err) {
        next(err);
    }
}

async function getRegister(req, res, next) {
    try {
        const response = await registerService.getRegister(req.params.id);

        logger.info(
            `GET /register/${req.params.id} - Registro obtido com sucesso.`,
        );

        return res.status(200).send(response);
    } catch (err) {
        next(err);
    }
}

export default {
    createRegister,
    updateRegister,
    getRegister,
};
