import { PartialType } from '@nestjs/mapped-types';
import { SuperCreateDto } from 'apps/super/src/dto/super-create-dto';

export class SuperUpdateDto extends PartialType(SuperCreateDto) {
    
}
