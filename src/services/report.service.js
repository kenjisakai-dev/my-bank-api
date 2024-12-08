import registerRepository from '../repositories/repository.js';

async function getReport(month, year) {
    const list = await registerRepository.readerFile();
    const metadata = await registerRepository.readerFileMetadata();

    const { months, years } = adjustParameters(month, year);

    const registers = list.registers.filter(
        (x) => months.includes(x.month) && years.includes(x.year),
    );

    if (registers.length === 0) {
        throw new Error('Registros não encontrados.');
    }

    const receita = getReportTotalByType(registers, metadata.receita);
    const receitaGeral = getReportTotalByType(registers, metadata.receitaGeral);
    const despesa = getReportTotalByType(registers, metadata.despesa);
    const despesaGeral = getReportTotalByType(registers, metadata.despesaGeral);
    const cartao = getReportTotalByType(registers, metadata.cartao);
    const balanco = standardizeValue(receita - despesa);
    const saldo = standardizeValue(receitaGeral - despesaGeral);
    const receitas = getReportByCategory(registers, metadata.receita);
    const despesas = getReportByCategory(registers, metadata.despesa);

    const response = {
        ano: years,
        mes: months,
        receita,
        despesa,
        saldo,
        cartao,
        balanco,
        receitas,
        despesas,
    };

    return response;
}

function adjustParameters(months, years) {
    const listMonths = [
        'JAN',
        'FEV',
        'MAR',
        'ABR',
        'MAI',
        'JUN',
        'JUL',
        'AGO',
        'SET',
        'OUT',
        'NOV',
        'DEZ',
    ];

    if (months && months !== '*') {
        months = months
            .toUpperCase()
            .replace(' ', '')
            .split(',')
            .filter((x) => listMonths.includes(x.toUpperCase()));
    }

    if (!months) {
        months = [listMonths[new Date().getMonth()]];
    }

    if (months === '*') months = listMonths;

    if (years && years !== '*') {
        years = years
            .replace(' ', '')
            .split(',')
            .map((x) => parseInt(x));
    }

    if (!years) {
        years = [new Date().getFullYear()];
    }

    if (years === '*') years = [2020, 2021, 2022, 2023, 2024, 2025];

    return { months, years };
}

function getReportTotalByType(data, types) {
    const total = data
        .filter((x) => types.includes(x.type))
        .map((x) => parseFloat(x.value))
        .reduce((ac, v) => ac + v, 0);

    return standardizeValue(total);
}

function standardizeValue(value) {
    return parseFloat(value.toFixed(2));
}

function getReportListByType(data, types) {
    return data.filter((x) => types.includes(x.type));
}

function getReportByCategory(registers, types) {
    const data = getReportListByType(registers, types);

    const categoriesObject = {};

    data.forEach((x) => {
        if (categoriesObject[x.category]) {
            categoriesObject[x.category] += x.value;
        } else {
            categoriesObject[x.category] = x.value;
        }
    });

    const categories = Object.entries(categoriesObject)
        .map(([categoria, valor]) => {
            return { categoria, valor: standardizeValue(valor) };
        })
        .sort((a, b) => b.valor - a.valor);

    return categories;
}

export default {
    getReport,
};
