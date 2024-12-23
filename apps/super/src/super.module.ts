import { Module } from '@nestjs/common';
import { SuperController } from './super.controller';
import { SuperService } from './super.service';
import { PrismaClientModule } from './prisma_client/prisma_client.module';

@Module({
  imports: [PrismaClientModule],
  controllers: [SuperController],
  providers: [SuperService],
})
export class SuperModule {}
