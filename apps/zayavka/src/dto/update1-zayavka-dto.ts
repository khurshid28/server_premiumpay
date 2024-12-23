import {
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsNumberString,
    IsString,
    Length,
    Min,
    MinLength,
  } from 'class-validator';
  
  export class Update1_ZayavkaDto {

      @IsNotEmpty()
      @IsNumber()
      @Min(1)
      id: number;


    @IsNotEmpty()
    @IsString()
    fullname: string;
  
    @IsNotEmpty()
    @IsString()
    @IsNumberString()
    @Length(9)
    passport: string;
  
  
    @IsNotEmpty()
    @IsString()
    @IsNumberString()
    @Length(14)
    pinfl: string;
  
  
  }