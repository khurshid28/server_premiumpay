import { Module } from '@nestjs/common';
import { ZayavkaController } from './zayavka.controller';
import { ZayavkaService } from './zayavka.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ZAYAVKA_CLIENT',
        transport: Transport.TCP,
        options: {
          port: 3007,
          host: 'localhost',
        },
      },
    ]),

    ClientsModule.register([
      {
        name: 'BOT_CLIENT',
        transport: Transport.TCP,
        options: {
          port: 3100,
          host: 'localhost',
        },
      },
    ]),
  ],
  controllers: [ZayavkaController],
  providers: [ZayavkaService],
})
export class ZayavkaModule {}
