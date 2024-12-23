import { Module } from '@nestjs/common';
import { MyidController } from './myid.controller';
import { MyidService } from './myid.service';
import { PrismaClientModule } from './prisma_client/prisma_client.module';

@Module({
  imports: [PrismaClientModule],
  controllers: [MyidController],
  providers: [MyidService],
})
export class MyidModule {}
