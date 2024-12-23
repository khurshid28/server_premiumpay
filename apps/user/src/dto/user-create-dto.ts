import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  isNumber,
  IsString,
  Length,
  Min,
  MinLength,
} from 'class-validator';

export class UserCreateDto {
  @IsNotEmpty()
  @IsString()
  fullname: string;
  @IsString()
  @Length(13)
  phone: string;
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  login: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  password: string;


  @IsNotEmpty()
  @IsInt()
  merchant_id: number;


  @IsNotEmpty()
  @IsInt()
  fillial_id: number;



}
