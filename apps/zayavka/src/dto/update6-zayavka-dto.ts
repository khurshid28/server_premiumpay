import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsString,
  Length,
  Max,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';

export class Update6_ZayavkaDto {
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  id: number;
  

  @IsNotEmpty()
  @IsNumber()
  @Min(3)
  expired_month: number;
}