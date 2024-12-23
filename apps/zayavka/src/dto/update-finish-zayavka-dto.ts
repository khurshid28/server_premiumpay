
import { Type } from 'class-transformer';
import {

  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class UpdateFinish_ZayavkaDto {

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  id: number;


  @IsNotEmpty()
  @IsString()
  @MinLength(4)
 
  code: boolean;
}