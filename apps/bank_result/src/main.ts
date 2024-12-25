import { NestFactory } from '@nestjs/core';
import { BankResultModule } from './bank_result.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    BankResultModule,
    {
      transport: Transport.TCP,
      options: { host: 'localhost', port: 3030 },
    },
  );

  app.useGlobalPipes(new ValidationPipe());

  await app.listen();
}
bootstrap();
