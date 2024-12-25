import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../guards/auth.guard';
import { BankAuthGuard } from '../guards/bank-auth.guard';
import { ScoringResultDto } from 'apps/bank_result/src/dto/scoring-result-dto';
import { ContractResultDto } from 'apps/bank_result/src/dto/contract-result-dto';
import { ResultService } from './result.service';

@UseGuards(AuthGuard)
@UseGuards(BankAuthGuard)
@Controller('result')
export class ResultController {
  constructor(private readonly resultService: ResultService) {}
  @Post('/scoring')
  @HttpCode(HttpStatus.OK)
  async scoring(@Body() data: ScoringResultDto) {
    return await this.resultService.scoring(data);
  }

  @Post('/contract')
  @HttpCode(HttpStatus.OK)
  async contract(@Body() data: ContractResultDto) {
    return await this.resultService.contract(data);
  }
}
