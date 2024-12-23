import { NestFactory } from '@nestjs/core';
import { SuperModule } from './super.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    SuperModule,
    {
      transport: Transport.TCP,
      options: { host: 'localhost', port: 3002 },
    },
  );

  app.useGlobalPipes(new ValidationPipe());
  await app.listen();
}
bootstrap();
