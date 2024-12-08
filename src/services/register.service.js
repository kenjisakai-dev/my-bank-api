import registerRepository from '../repositories/repository.js';

async function createRegister(register) {
    const list = await registerRepository.readerFile();

    const data = {
        id: list.nextId++,
        year: parseInt(register.year),
        month: register.month.toUpperCase(),
        description: register.description,
        value: parseFloat(register.value.toFixed(2)),
        category: register.category,
        type: register.type.toUpperCase(),
    };

    list.registers.push(data);

    await registerRepository.writerFile(list);

    return data;
}

async function updateRegister(register) {
    const { id, year, month, description, value, category, type } = register;

    const list = await registerRepository.readerFile();

    const index = list.registers.findIndex((x) => x.id === parseInt(id));

    if (index === -1) throw new Error('Registro não encontrado.');

    if (year) list.registers[index].year = parseInt(year.toFixed(2));
    if (month) list.registers[index].month = month.toUpperCase();
    if (description) list.registers[index].description = description;
    if (value) list.registers[index].value = parseFloat(value.toFixed(2));
    if (category) list.registers[index].category = category;
    if (type) list.registers[index].type = type.toUpperCase();

    await registerRepository.writerFile(list);

    return list.registers[index];
}

async function getRegister(id) {
    const list = await registerRepository.readerFile();

    const register = list.registers.find((x) => x.id === parseInt(id));

    if (!register) {
        throw new Error('Registro não encontrado.');
    }

    return register;
}

export default {
    createRegister,
    updateRegister,
    getRegister,
};
