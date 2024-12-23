import { Controller, Get, HttpException } from '@nestjs/common';
import { MyidService } from './myid.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MyidCheckDto } from './dto/check-myid-dto';

@Controller()
export class MyidController {
  constructor(private readonly myidService: MyidService) {}

  @MessagePattern('myid.profile')
  async profile(@Payload() payload: { passport: string }) {
    try {
      return await this.myidService.profile(payload.passport);
    } catch (error) {
      return new HttpException(error.message, error.status);
    }
  }

  @MessagePattern('myid.check')
  async check(@Payload() payload: MyidCheckDto) {
    try {
      return await this.myidService.check(payload);
    } catch (error) {
      return new HttpException(error.message, error.status);
    }
  } 
}
