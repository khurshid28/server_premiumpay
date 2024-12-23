
import { Type } from 'class-transformer';
import {

  IsBoolean,
  IsNotEmpty,
  IsNumber,
  Min,
} from 'class-validator';

export class Update7_ZayavkaDto {


  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  id: number;


  @IsNotEmpty()
  @IsBoolean()
  @Min(3)
  agree: boolean;
}