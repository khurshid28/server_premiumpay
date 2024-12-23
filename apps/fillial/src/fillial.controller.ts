import { Controller, Get, HttpException } from '@nestjs/common';
import { FillialService } from './fillial.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FillialUpdateDto } from './dto/fillial-update-dto';
import { FillialCreateDto } from './dto/fillial-create-dto';

@Controller()
export class FillialController {
  constructor(private readonly fillialService: FillialService) {}

    @MessagePattern('fillial.all')
     async findAll(@Payload() data: any) {
       try {
         return await this.fillialService.findAll();
       } catch (error) {
       
        
         return new HttpException(error.message, error.status);
       }
     }
   
     @MessagePattern('fillial.findOne')
     async findOne(@Payload() id: number) {
       try {
         return await this.fillialService.findOne(id);
       } catch (error) {
         return new HttpException(error.message, error.status);
       }
     }
   
     @MessagePattern('fillial.create')
     async create(@Payload() data: FillialCreateDto) {
       try {
         return await this.fillialService.create(data);
       } catch (error) {
        
         return new HttpException(error.message, error.status);
       }
     }
   
     @MessagePattern('fillial.update')
     async update(@Payload() payload: { id: number; data: FillialUpdateDto }) {
       try {
         return await this.fillialService.update(payload.id, payload.data);
       } catch (error) {
         return new HttpException(error.message, error.status);
       }
     }
   
     @MessagePattern('fillial.remove')
     async remove(@Payload() payload: { id: number; }) {
       try {
         return await this.fillialService.remove(payload.id,);
       } catch (error) {
         return new HttpException(error.message, error.status);
       }
     }
}
