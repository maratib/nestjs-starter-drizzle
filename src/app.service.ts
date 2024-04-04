import { LoggerService } from './logger/logger.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly loggerService: LoggerService) {}
  getHello(): string {
    this.loggerService.warn('Hello');
    return 'Hello World1!';
  }
}
