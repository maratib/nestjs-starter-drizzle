import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { validationSchema } from './config/config.schema';
import { config, configFilePath } from './config';
import { DrizzleModule } from './drizzle/drizzle.module';
import { UsersModule } from './users/users.module';
// import { LoggerModule } from './logger/logger.module';

// console.log('----------------', ENV);
const envFilePath = configFilePath();

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
