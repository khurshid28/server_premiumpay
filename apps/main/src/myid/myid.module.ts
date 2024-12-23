import { Module } from '@nestjs/common';
import { MyidController } from './myid.controller';
import { MyidService } from './myid.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MYID_CLIENT',
        transport: Transport.TCP,
        options: {
          port: 3006,
          host: 'localhost',
        },
      },
    ]),
  ],
  controllers: [MyidController],
  providers: [MyidService],
})
export class MyidModule {}
