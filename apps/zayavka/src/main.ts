import { NestFactory } from '@nestjs/core';
import { ZayavkaModule } from './zayavka.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    ZayavkaModule,
        {
          transport: Transport.TCP,
          options: { host: 'localhost', port: 3007 },
        },
      );
    
      app.useGlobalPipes(new ValidationPipe());
  
      await app.listen();
}
bootstrap();
