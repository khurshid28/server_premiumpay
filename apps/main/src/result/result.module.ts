import { Module } from '@nestjs/common';
import { ResultService } from './result.service';
import { ResultController } from './result.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'RESULT_CLIENT',
        transport: Transport.TCP,
        options: {
          port: 3030,
          host: 'localhost',
        },
      },
    ]),
  ],
  providers: [ResultService],
  controllers: [ResultController],
})
export class ResultModule {}
