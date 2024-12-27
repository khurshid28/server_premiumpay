import { Module } from '@nestjs/common';
import { BotController } from './bot.controller';
import { BotService } from './bot.service';
import { PrismaClientModule } from './prisma_client/prisma_client.module';
import { AdminBotService } from './admin_bot/admin_bot.service';
import { NumModule } from '@app/num';
import { SupportBotService } from './support_bot/support_bot.service';

@Module({
  imports: [PrismaClientModule,NumModule],
  exports :[AdminBotService,],
  controllers: [BotController],
  providers: [BotService, AdminBotService, SupportBotService,],
})
export class BotModule {}
