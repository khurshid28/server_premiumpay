import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  isNumber,
  IsOptional,
  IsString,
  Length,
  Min,
  MinLength,
} from 'class-validator';

export class UserUpdateDto {
  @IsString()
  @IsOptional()
  fullname: string;
  
  @IsString()
  @Length(13)
  @IsOptional()
  phone: string;
  @IsOptional()
  @IsString()
  @MinLength(8)
  login: string;

  @IsOptional()
  @IsString()
  @MinLength(8)
  password: string;





}
