import { Controller,  HttpException } from '@nestjs/common';
import { ZayavkaService } from './zayavka.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CancelZayavkaDto } from './dto/cancel-zayavka-dto';
import { Update1_ZayavkaDto } from './dto/update1-zayavka-dto';
import { Update2_ZayavkaDto } from './dto/update2-zayavka-dto';
import { Update3_ZayavkaDto } from './dto/update3-zayavka-dto';
import { UpdateFinish_ZayavkaDto } from './dto/update-finish-zayavka-dto';
import { Update5_ZayavkaDto } from './dto/update5-zayavka-dto';
import { Update6_ZayavkaDto } from './dto/update6-zayavka-dto';
import { Update7_ZayavkaDto } from './dto/update7-zayavka-dto';

@Controller()
export class ZayavkaController {
  constructor(private readonly zayavkaService: ZayavkaService) {}

  @MessagePattern('zayavka.all')
  async findAll(@Payload() data: any) {
    try {
      return await this.zayavkaService.findAll();
    } catch (error) {
      return new HttpException(error.message, error.status);
    }
  }

  @MessagePattern('zayavka.findOne')
  async findOne(@Payload() id: number) {
    try {
      return await this.zayavkaService.findOne(id);
    } catch (error) {
      return new HttpException(error.message, error.status);
    }
  }

  @MessagePattern('zayavka.cancel')
  async cancel(@Payload() payload: { id: number; data: CancelZayavkaDto }) {
    try {
      return await this.zayavkaService.cancel(payload.id, payload.data);
    } catch (error) {
      return new HttpException(error.message, error.status);
    }
  }

  @MessagePattern('zayavka.graph')
  async graph(@Payload() payload: { id: number }) {
    try {
      return await this.zayavkaService.graph(payload.id);
    } catch (error) {
      return new HttpException(error.message, error.status);
    }
  }

  @MessagePattern('zayavka.update-1')
  async update1(@Payload() payload: Update1_ZayavkaDto) {
    try {
      return await this.zayavkaService.update1(payload);
    } catch (error) {
      return new HttpException(error.message, error.status);
    }
  }
  @MessagePattern('zayavka.update-2')
  async update2(@Payload() payload: Update2_ZayavkaDto) {
    try {
      return await this.zayavkaService.update2(payload);
    } catch (error) {
      return new HttpException(error.message, error.status);
    }
  }
  @MessagePattern('zayavka.update-3')
  async update3(@Payload() payload: Update3_ZayavkaDto) {
    try {
      return await this.zayavkaService.update3(payload);
    } catch (error) {
      return new HttpException(error.message, error.status);
    }
  }
  @MessagePattern('zayavka.update-5')
  async update5(@Payload() payload: Update5_ZayavkaDto) {
    try {
      return await this.zayavkaService.update5(payload);
    } catch (error) {
      return new HttpException(error.message, error.status);
    }
  }
  @MessagePattern('zayavka.update-6')
  async update6(@Payload() payload: Update6_ZayavkaDto) {
    try {
      return await this.zayavkaService.update6(payload);
    } catch (error) {
      return new HttpException(error.message, error.status);
    }
  }

  @MessagePattern('zayavka.update-7')
  async update7(@Payload() payload: Update7_ZayavkaDto) {
    try {
      return await this.zayavkaService.update7(payload);
    } catch (error) {
      return new HttpException(error.message, error.status);
    }
  }
  @MessagePattern('zayavka.update-finish')
  async updateFinish(@Payload() payload: UpdateFinish_ZayavkaDto) {
    try {
      return await this.zayavkaService.updateFinish(payload);
    } catch (error) {
      return new HttpException(error.message, error.status);
    }
  }









  @MessagePattern('zayavka.scoring_result')
  async scoring_result(@Payload() payload: UpdateFinish_ZayavkaDto) {
    try {
      return await this.zayavkaService.updateFinish(payload);
    } catch (error) {
      return new HttpException(error.message, error.status);
    }
  }
  @MessagePattern('zayavka.update-finish')
  async contract_result(@Payload() payload: UpdateFinish_ZayavkaDto) {
    try {
      return await this.zayavkaService.updateFinish(payload);
    } catch (error) {
      return new HttpException(error.message, error.status);
    }
  }




}
