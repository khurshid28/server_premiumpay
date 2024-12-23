import { NestFactory } from '@nestjs/core';
import { MyidModule } from './myid.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
 const app = await NestFactory.createMicroservice<MicroserviceOptions>(
     MyidModule,
     {
       transport: Transport.TCP,
       options: { host: 'localhost', port: 3006 },
     },
   );
 
   app.useGlobalPipes(new ValidationPipe());
 
   await app.listen();
}
bootstrap();
