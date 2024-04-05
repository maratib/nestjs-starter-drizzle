import { ConfigService } from '@nestjs/config';
// import { LoggerService } from './logger/logger.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}
  getHello(): string {
    // this.loggerService.warn('Hello');
    // console.log(this.configService.get('domain'));
    return 'Hello World!';
  }
}
