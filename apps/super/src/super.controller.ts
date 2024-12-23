import { Controller, Get, HttpException } from '@nestjs/common';
import { SuperService } from './super.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SuperCreateDto } from './dto/super-create-dto';
import { SuperUpdateDto } from './dto/super-update-dto';

@Controller()
export class SuperController {
  constructor(private readonly superService: SuperService) {}

  @MessagePattern('super.all')
  async findAll(@Payload() data: any) {
    try {
      return await this.superService.findAll();
    } catch (error) {
      return new HttpException(error.message, error.status);
    }
  }

  @MessagePattern('super.findOne')
  async findOne(@Payload() id: number) {
    try {
      return await this.superService.findOne(id);
    } catch (error) {
      return new HttpException(error.message, error.status);
    }
  }

  @MessagePattern('super.create')
  async create(@Payload() data: SuperCreateDto) {
    try {
      return await this.superService.create(data);
    } catch (error) {
      return new HttpException(error.message, error.status);
    }
  }

  @MessagePattern('super.update')
  async update(@Payload() payload: { id: number; data: SuperUpdateDto }) {
    try {
      return await this.superService.update(payload.id, payload.data);
    } catch (error) {
      return new HttpException(error.message, error.status);
    }
  }

  @MessagePattern('super.remove')
  async remove(@Payload() payload: { id: number; }) {
    try {
      return await this.superService.remove(payload.id,);
    } catch (error) {
      return new HttpException(error.message, error.status);
    }
  }
}
