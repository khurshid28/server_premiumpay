import { Controller, Get, HttpException } from '@nestjs/common';
import { BankResultService } from './bank_result.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ScoringResultDto } from './dto/scoring-result-dto';
import { ContractResultDto } from './dto/contract-result-dto';

@Controller()
export class BankResultController {
  constructor(private readonly bankResultService: BankResultService) {}

  @MessagePattern('result.scoring')
  async scoring(@Payload() data: ScoringResultDto) {
    try {
      return await this.bankResultService.scoring(data);
    } catch (error) {
      return new HttpException(error.message, error.status);
    }
  }

  @MessagePattern('result.contract')
  async contract(@Payload() data: ContractResultDto) {
    try {
      return await this.bankResultService.contract(data);
    } catch (error) {
      return new HttpException(error.message, error.status);
    }
  }
}
