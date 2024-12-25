import { NestFactory } from '@nestjs/core';
import { BotModule } from './bot.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {



  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    BotModule,
      {
        transport: Transport.TCP,
        options: { host: 'localhost', port: 3100 },
      },
    );
  
    app.useGlobalPipes(new ValidationPipe());
  
    await app.listen();
}
bootstrap();
