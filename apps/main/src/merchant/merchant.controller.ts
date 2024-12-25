import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { MerchantService } from './merchant.service';

import { MerchantUpdateDto } from 'apps/merchant/src/dto/merchant-update-dto';
import { MerchantCreateDto } from 'apps/merchant/src/dto/merchant-create-dto';
import { AuthGuard } from '../guards/auth.guard';


@UseGuards(AuthGuard)
@Controller('merchant')
export class MerchantController {
  constructor(private readonly merchantService: MerchantService) {}

  @Post("/create")
   create(@Body() createUserDto: MerchantCreateDto) {
     return this.merchantService.create(createUserDto);
   }
 
   @Get("/all")
   findAll() {
     return this.merchantService.findAll();
   }
 
   @Get(':id')
   findOne(@Param('id') id: string) {
     return this.merchantService.findOne(+id);
   }
 
   @Put(':id')
   update(@Param('id') id: string, @Body() updateUserDto: MerchantUpdateDto) {
     return this.merchantService.update(+id, updateUserDto);
   }
 
   @Delete(':id')
   remove(@Param('id') id: string) {
     return this.merchantService.remove(+id);
   }
}
