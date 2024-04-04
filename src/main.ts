import 'dotenv/config';
import { logger } from './logger/winston.config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { LoggerService } from './logger/logger.service';
import { WinstonModule } from 'nest-winston';
// import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      instance: logger,
    }),
  });

  const loggerService: LoggerService = app.get(LoggerService);

  const configService: ConfigService = app.get(ConfigService);
  await app.listen(configService.get('port'));

  loggerService.warn('Server PORT : ' + configService.get('port'), this);
}
bootstrap();
