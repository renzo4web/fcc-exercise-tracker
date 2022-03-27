import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotEnv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';

dotEnv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(3000);
}
bootstrap();
