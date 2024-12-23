import {
  IsNotEmpty,
  IsString

} from 'class-validator';

export class CancelZayavkaDto {
  @IsNotEmpty()
  @IsString()
  canceled_reason: string;
}
