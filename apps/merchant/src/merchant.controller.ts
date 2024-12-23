import { Controller, Get, HttpException } from '@nestjs/common';
import { MerchantService } from './merchant.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MerchantCreateDto } from './dto/merchant-create-dto';
import { MerchantUpdateDto } from './dto/merchant-update-dto';

@Controller()
export class MerchantController {
  constructor(private readonly merchantService: MerchantService) {}

   @MessagePattern('merchant.all')
   async findAll(@Payload() data: any) {
     try {
       return await this.merchantService.findAll();
     } catch (error) {
       return new HttpException(error.message, error.status);
     }
   }
 
   @MessagePattern('merchant.findOne')
   async findOne(@Payload() id: number) {
     try {
       return await this.merchantService.findOne(id);
     } catch (error) {
       return new HttpException(error.message, error.status);
     }
   }
 
   @MessagePattern('merchant.create')
   async create(@Payload() data: MerchantCreateDto) {
     try {
       return await this.merchantService.create(data);
     } catch (error) {
       return new HttpException(error.message, error.status);
     }
   }
 
   @MessagePattern('merchant.update')
   async update(@Payload() payload: { id: number; data: MerchantUpdateDto }) {
     try {
       return await this.merchantService.update(payload.id, payload.data);
     } catch (error) {
       return new HttpException(error.message, error.status);
     }
   }
 
   @MessagePattern('merchant.remove')
   async remove(@Payload() payload: { id: number; }) {
     try {
       return await this.merchantService.remove(payload.id,);
     } catch (error) {
       return new HttpException(error.message, error.status);
     }
   }
}
