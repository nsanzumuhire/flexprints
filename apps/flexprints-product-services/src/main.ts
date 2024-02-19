/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(environment.server_port);
  Logger.log(
    `🚀 Microservice product-services is running on: ${environment.server_url}`
  );
}

bootstrap();
