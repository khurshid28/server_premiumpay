import { NestFactory } from '@nestjs/core';
import { FillialModule } from './fillial.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    FillialModule,
    {
      transport: Transport.TCP,
      options: { host: 'localhost', port: 3005 },
    },
  );

  app.useGlobalPipes(new ValidationPipe());

  await app.listen();
}
bootstrap();
