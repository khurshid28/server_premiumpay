import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
  MinLength,
} from 'class-validator';
import { RESULT_STATUS } from './contract-result-dto';

export class ScoringResultDto {
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  app_id: number;

  @IsOptional()
  @IsNumber()
  @Min(1000)
  @Min(100000000)
  limit_summa: number;

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  contractId: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(RESULT_STATUS)
  status: RESULT_STATUS;

  @IsOptional()
  @IsString()
  canceled_reason: string;
}
