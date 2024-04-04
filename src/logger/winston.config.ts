import winston from 'winston';
import { utilities as nestWinstonModuleUtilities } from 'nest-winston';

const logFilePath = process.cwd() + process.env.LOG_PATH;
console.log('LOG-PATH: ', logFilePath);
// Create transports instance

const logToFile = new winston.transports.File({
  filename: logFilePath,
});

const logToConsole = new winston.transports.Console({
  format: winston.format.combine(
    winston.format.timestamp(),
    nestWinstonModuleUtilities.format.nestLike(),
  ),
});

const transports = [];

process.env.FILE_LOGGING == '1'
  ? transports.push(logToFile)
  : transports.push(logToConsole);

// Create and export the logger instance
export const logger = winston.createLogger({
  level: 'warn',
  format: winston.format.json(),
  transports,
});
