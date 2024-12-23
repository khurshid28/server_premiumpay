import { PartialType } from '@nestjs/mapped-types';
import { SuperCreateDto } from 'apps/super/src/dto/super-create-dto';
import { MerchantCreateDto } from './merchant-create-dto';

export class MerchantUpdateDto extends PartialType(MerchantCreateDto) {
    
}
