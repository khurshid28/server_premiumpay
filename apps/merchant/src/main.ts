import { NestFactory } from '@nestjs/core';
import { MerchantModule } from './merchant.module';
import { ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';


async function bootstrap() {
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
      MerchantModule,
        {
          transport: Transport.TCP,
          options: { host: 'localhost', port: 3004 },
        },
      );
    
      app.useGlobalPipes(new ValidationPipe());
  
      await app.listen();
}
bootstrap();
