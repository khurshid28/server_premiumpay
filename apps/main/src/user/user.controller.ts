import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Inject } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto } from 'apps/user/src/dto/user-create-dto';
import { UserUpdateDto } from 'apps/user/src/dto/user-update-dto';



@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService,

    
  ) {}

  @Post("/create")
  create(@Body() createUserDto: UserCreateDto) {
    return this.userService.create(createUserDto);
  }

  @Get("/all")
  findAll() {
    return this.userService.findAll();
  }
  
  @Get(':id')
 async findOne(@Param('id') id: string) {
    

    
    return await this.userService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UserUpdateDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
