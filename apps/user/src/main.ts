import { NestFactory } from '@nestjs/core';
import { UserModule } from './user.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
      UserModule,
      {
        transport: Transport.TCP,
        options: { host: 'localhost', port: 3003 },
      },
    );
  
    app.useGlobalPipes(new ValidationPipe());

    await app.listen();
}
bootstrap();
