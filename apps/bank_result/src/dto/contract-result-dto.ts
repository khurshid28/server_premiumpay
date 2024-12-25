import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export enum RESULT_STATUS {
  SUCCESS = "SUCCESS",
  FAILED = "FAILED"
 }


export class ContractResultDto {
 
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  contractId: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(RESULT_STATUS)
  status: RESULT_STATUS;
}


