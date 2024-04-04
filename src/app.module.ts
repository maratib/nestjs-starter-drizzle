import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { validationSchema } from './config/config.schema';
import { config } from './config';
import { LoggerService } from './logger/logger.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema,
      load: [config],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, LoggerService],
})
export class AppModule {}
