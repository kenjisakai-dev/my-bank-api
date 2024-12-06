import winston from 'winston';

const { printf, timestamp, label, combine } = winston.format;

const myFormat = printf(({ timestamp, label, level, message }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = winston.createLogger({
    level: 'silly',
    transports: [
        new winston.transports.File({ filename: 'logs/my-bank-api.log' }),
    ],
    format: combine(
        label({ label: 'my-bank-api' }),
        timestamp({ format: 'DD/MM/YYYY HH:mm' }),
        myFormat,
    ),
});

export default logger;
