import { MERCHANT_TYPE } from '@prisma/client';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Min,
  MinLength,
} from 'class-validator';

export class MerchantCreateDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  
  @IsOptional()
  @IsEnum(MERCHANT_TYPE)
  type: MerchantType;
}

enum MerchantType   {
    MERCHANT =  "MERCHANT",
    AGENT = "AGENT"
}