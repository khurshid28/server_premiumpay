import { Controller, Get, HttpException } from '@nestjs/common';
import { BotService } from './bot.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class BotController {
  constructor(private readonly botService: BotService) {}

  @MessagePattern('bot.scoring')
  async scoring(@Payload() data: { id: number }) {
    try {
      return await this.botService.scoring(data.id);
    } catch (error) {
      return new HttpException(error.message, error.status);
    }
  }

  @MessagePattern('bot.limit')
  async limit(@Payload() data: { id: number, limit : number }) {
    try {
      return await this.botService.limit(data.id,data.limit);
    } catch (error) {
      return new HttpException(error.message, error.status);
    }
  }
  
  @MessagePattern('bot.scoring_cancel')
  async scoring_cancel(
    @Payload() data: { id: number; canceled_reason: string },
  ) {
    try {
      return await this.botService.scoring_cancel(data.id,data.canceled_reason);
    } catch (error) {
      return new HttpException(error.message, error.status);
    }
  }

  @MessagePattern('bot.contractSuccess')
  async contractSuccess(@Payload() data: { id: number }) {
    try {
      return await this.botService.contractSuccess(data.id);
    } catch (error) {
      return new HttpException(error.message, error.status);
    }
  }
}
