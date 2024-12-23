import { Module } from '@nestjs/common';
import { FillialService } from './fillial.service';
import { FillialController } from './fillial.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
      ClientsModule.register([
        {
          name: 'FILLIAL_CLIENT',
          transport: Transport.TCP,
          options: {
            port: 3005,
            host: 'localhost',
          },
        },
      ]),
    ],
  controllers: [FillialController],
  providers: [FillialService],
})
export class FillialModule {}
