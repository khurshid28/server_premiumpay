import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  MaxDate
} from 'class-validator';

enum GENDER {
  ERKAK,
  AYOL,
}

export class MyidCheckDto {
  @IsNotEmpty()
  @IsString()
  @Length(9)
  passport: string;

  @IsOptional()
  @IsString()
  @IsEnum(GENDER)
  gender: GENDER;

  @IsOptional()
  @IsDateString()
  @MaxDate(new Date())
  birth_date: Date;
}
