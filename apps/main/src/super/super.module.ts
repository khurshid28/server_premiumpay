import { Module } from '@nestjs/common';
import { SuperService } from './super.service';
import { SuperController } from './super.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
   imports: [
      ClientsModule.register([
        {
          name: 'SUPER_CLIENT',
          transport: Transport.TCP,
          options: {
            port: 3002,
            host: 'localhost',
          },
        },
      ]),
    ],
  controllers: [SuperController],
  providers: [SuperService],
})
export class SuperModule {}
