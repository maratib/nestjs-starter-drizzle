import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { validationSchema } from './config/config.schema';
import { config } from './config';
import { DrizzleModule } from './drizzle/drizzle.module';
import { UsersModule } from './users/users.module';
// import { LoggerModule } from './logger/logger.module';

let envFilePath = `${process.cwd()}/.env`;
const ENV = process.env.NODE_ENV;
if (ENV == 'development') {
  envFilePath = `${process.cwd()}/config/development.env`;
} else if (ENV == 'production') {
  envFilePath = `${process.cwd()}/config/production.env`;
} else if (ENV == 'test') {
  envFilePath = `${process.cwd()}/config/test.env`;
}
// console.log('----------------', ENV);

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath,
      isGlobal: true,
      validationSchema,
      load: [config],
    }),
    DrizzleModule,
    UsersModule,
    // LoggerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [DrizzleModule],
})
export class AppModule {}
