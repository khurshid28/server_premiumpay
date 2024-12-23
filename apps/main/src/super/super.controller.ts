import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { SuperService } from './super.service';
import { SuperCreateDto } from 'apps/super/src/dto/super-create-dto';
import { SuperUpdateDto } from 'apps/super/src/dto/super-update-dto';

@Controller('super')
export class SuperController {
  constructor(private readonly superService: SuperService) {}

  @Post("/create")
  create(@Body() createSuperDto: SuperCreateDto) {
    return this.superService.create(createSuperDto);
  }

  @Get("/all")
  findAll() {
    return this.superService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.superService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateSuperDto: SuperUpdateDto) {
    return this.superService.update(+id, updateSuperDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.superService.remove(+id);
  }
}
