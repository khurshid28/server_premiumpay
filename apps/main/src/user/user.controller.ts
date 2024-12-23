import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Inject } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto } from 'apps/user/src/dto/user-create-dto';
import { UserUpdateDto } from 'apps/user/src/dto/user-update-dto';
import { Cache, CACHE_MANAGER } from '@nestjs/cache-manager';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService,

     @Inject(CACHE_MANAGER) private cacheManager: Cache,
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
    let key = '/user/' + id;
    
    const cacheData = await this.cacheManager.get(key);

    if (cacheData) return cacheData;

    let user = await this.userService.findOne(+id);
    await this.cacheManager.set(key, user,10000);

    
    return user;
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
