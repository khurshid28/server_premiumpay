import { MERCHANT_TYPE, PERCENT_TYPE, REGION } from '@prisma/client';
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
} from 'class-validator';
import { expired_month } from './fillial-create-dto';

export class FillialUpdateDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsEnum(REGION)
  region: REGION;

 
  @IsOptional()
  @IsString()
  director_name: string;

  @IsOptional()
  @IsString()
  @Length(13)
  director_phone: string;



  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0.01)
  @Max(6)
  cachback_percent: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(300000)
  cachback_amount: number;
 
  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => expired_month)
  expired_month: expired_month[];
}
