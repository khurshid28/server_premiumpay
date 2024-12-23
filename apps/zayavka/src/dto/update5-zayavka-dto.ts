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

export class Update5_ZayavkaDto {

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  id: number;
  

  @IsNotEmpty()
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => ProductType)
  @ValidateNested({ each: true })
  products: ProductType[];
}

export class ProductType {
  @IsNotEmpty()
  @IsNumber()
  @Min(1000)
  price: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  quantity: number;
}
