import { Module } from '@nestjs/common';
import { ZayavkaController } from './zayavka.controller';
import { ZayavkaService } from './zayavka.service';
import { PrismaClientModule } from './prisma_client/prisma_client.module';

@Module({
  imports: [PrismaClientModule],
  controllers: [ZayavkaController],
  providers: [ZayavkaService],
})
export class ZayavkaModule {}
