import { Controller, Get, HttpException } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserCreateDto } from './dto/user-create-dto';
import { UserUpdateDto } from './dto/user-update-dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern('user.all')
    async findAll(@Payload() data: any) {
      try {
        return await this.userService.findAll();
      } catch (error) {
        return new HttpException(error.message, error.status);
      }
    }
  
    @MessagePattern('user.findOne')
    async findOne(@Payload() id: number) {
      try {
        return await this.userService.findOne(id);
      } catch (error) {
        return new HttpException(error.message, error.status);
      }
    }
  
    @MessagePattern('user.create')
    async create(@Payload() data: UserCreateDto) {
      try {
        return await this.userService.create(data);
      } catch (error) {
        return new HttpException(error.message, error.status);
      }
    }
  
    @MessagePattern('user.update')
    async update(@Payload() payload: { id: number; data: UserUpdateDto }) {
      try {
        return await this.userService.update(payload.id, payload.data);
      } catch (error) {
        return new HttpException(error.message, error.status);
      }
    }
  
    @MessagePattern('user.remove')
    async remove(@Payload() payload: { id: number; }) {
      try {
        return await this.userService.remove(payload.id,);
      } catch (error) {
        return new HttpException(error.message, error.status);
      }
    }
}
