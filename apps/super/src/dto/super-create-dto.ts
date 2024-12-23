import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Length,
  Min,
  MinLength,
} from 'class-validator';

export class SuperCreateDto {
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
}
