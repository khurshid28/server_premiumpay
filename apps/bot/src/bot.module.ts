import { Module } from '@nestjs/common';
import { BotController } from './bot.controller';
import { BotService } from './bot.service';
import { PrismaClientModule } from './prisma_client/prisma_client.module';
import { TelegramBotService } from './telegram_bot/telegram_bot.service';
import { NumModule } from '@app/num';

@Module({
  imports: [PrismaClientModule,NumModule],
  exports :[TelegramBotService],
  controllers: [BotController],
  providers: [BotService, TelegramBotService,],
})
export class BotModule {}
