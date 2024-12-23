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

export class Update2_ZayavkaDto {
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  id: number;

  @IsNotEmpty()
  @IsString()
  @Length(13)
  phone: string;

  @IsNotEmpty()
  @IsString()
  @Length(13)
  phone2: string;
}
