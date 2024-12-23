import {

    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    Min,

  } from 'class-validator';
  
  export class Update3_ZayavkaDto {

     @IsNotEmpty()
          @IsNumber()
          @Min(1)
          id: number;

    @IsOptional()
    @IsString()
    selfie_with_passport: string;
  
  }