import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { FillialService } from './fillial.service';

import { FillialUpdateDto } from 'apps/fillial/src/dto/fillial-update-dto';
import { FillialCreateDto } from 'apps/fillial/src/dto/fillial-create-dto';
import { AuthGuard } from '../guards/auth.guard';


@UseGuards(AuthGuard)
@Controller('fillial')
export class FillialController {
  constructor(private readonly fillialService: FillialService) {}

  @Post("/create")
     create(@Body() createUserDto: FillialCreateDto) {
       return this.fillialService.create(createUserDto);
     }
   
     @Get("/all")
     findAll() {
       return this.fillialService.findAll();
     }
   
     @Get(':id')
     findOne(@Param('id') id: string) {
       return this.fillialService.findOne(+id);
     }
   
     @Put(':id')
     update(@Param('id') id: string, @Body() updateUserDto: FillialUpdateDto) {
       return this.fillialService.update(+id, updateUserDto);
     }
   
     @Delete(':id')
     remove(@Param('id') id: string) {
       return this.fillialService.remove(+id);
     }
}
