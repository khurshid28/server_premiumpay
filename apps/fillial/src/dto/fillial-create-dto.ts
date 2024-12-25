import { PartialType } from '@nestjs/mapped-types';
import { MERCHANT_TYPE, PERCENT_TYPE, Prisma, REGION } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
  Length,
  Max,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';

export class FillialCreateDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEnum(REGION)
  region: REGION;


  @IsNotEmpty()
  @IsEnum(PERCENT_TYPE)
  percent_type: PERCENT_TYPE;

  @IsNotEmpty()
  @IsNumber()
  merchant_id: number;

  @IsNotEmpty()
  @IsNumberString()
  @IsString()
  @MinLength(9)
  nds: number;

  @IsNotEmpty()
  @IsNumberString()
  @IsString()
  @Length(20)
  hisob_raqam: number;

  @IsNotEmpty()
  @IsNumberString()
  @IsString()
  @Length(4)
  mfo: number;

  @IsNotEmpty()
  @IsNumberString()
  @IsString()
  @Length(8)
  inn: number;

  @IsOptional()
  @IsString()
  bank_name: string;

  @IsOptional()
  @IsString()
  director_name: string;

  @IsOptional()
  @IsString()
  @Length(13)
  director_phone: string;


  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @Max(10)
  cachback_percent: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(300000)
  cachback_amount: number;
 
  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => expired_month)
  @ValidateNested({ each: true })

  expired_months: expired_month[];
}

export class expired_month {
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(60)
  month: number;

  @IsNotEmpty()
  @IsNumber({ maxDecimalPlaces: 1 })
  @Min(1)
  percent: number;


  @IsOptional()
  @IsNumber()
  @Min(60)
  @Max(3600)
  timeout: number;
}
