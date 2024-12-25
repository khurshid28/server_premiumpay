import { Module } from '@nestjs/common';
import { BankResultController } from './bank_result.controller';
import { BankResultService } from './bank_result.service';
import { PrismaClientModule } from './prisma_client/prisma_client.module';

@Module({
  imports: [PrismaClientModule],
  controllers: [BankResultController],
  providers: [BankResultService],
})
export class BankResultModule {}
