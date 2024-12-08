import { promises as fs } from 'fs';
const { readFile, writeFile } = fs;

const fileName = 'registers.json';

async function readerFile() {
    try {
        return JSON.parse(await readFile(fileName));
    } catch (erro) {
        throw new Error(`Erro ao obter registros: ${erro.message}`);
    }
}

async function writerFile(data) {
    try {
        await writeFile(fileName, JSON.stringify(data, null, 4));
    } catch (erro) {
        throw new Error(`Erro ao criar registro: ${erro.message}`);
    }
}

async function readerFileMetadata() {
    try {
        return JSON.parse(await readFile('metadata.json'));
    } catch (erro) {
        throw new Error(`Erro ao obter os metadados: ${erro.message}`);
    }
}

export default {
    readerFile,
    writerFile,
    readerFileMetadata,
};
