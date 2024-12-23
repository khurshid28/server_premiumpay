import { Module } from '@nestjs/common';
import { FillialController } from './fillial.controller';
import { FillialService } from './fillial.service';
import { PrismaClientService } from './prisma_client/prisma_client.service';
import { PrismaClientModule } from './prisma_client/prisma_client.module';

@Module({
  imports: [PrismaClientModule],
  controllers: [FillialController],
  providers: [FillialService, ],
})
export class FillialModule {}
