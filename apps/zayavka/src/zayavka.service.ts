import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { STATUS, Zayavka } from '@prisma/client';
import { PrismaClientService } from './prisma_client/prisma_client.service';
import { CancelZayavkaDto } from './dto/cancel-zayavka-dto';
import { Update1_ZayavkaDto } from './dto/update1-zayavka-dto';
import { Update6_ZayavkaDto } from './dto/update6-zayavka-dto';
import { Update5_ZayavkaDto } from './dto/update5-zayavka-dto';
import { Update3_ZayavkaDto } from './dto/update3-zayavka-dto';
import { Update2_ZayavkaDto } from './dto/update2-zayavka-dto';
import { Update7_ZayavkaDto } from './dto/update7-zayavka-dto';
import { UpdateFinish_ZayavkaDto } from './dto/update-finish-zayavka-dto';

@Injectable()
export class ZayavkaService {
  constructor(@Inject() private prismaService: PrismaClientService) {}
  async findAll(): Promise<Zayavka[]> {
    return await this.prismaService.zayavka.findMany({
      orderBy: {
        id: 'desc',
      },
    });
  }
  async search(query: { text: string | undefined }): Promise<Zayavka[]> {
    return await this.prismaService.zayavka.findMany({
      where: {
        OR: [
          {
            fullname: {
              // search: `${query.text}`,
              contains: `${query.text}`,
            },
          },
          {
            phone: {
              // search: `${query.text}`,
              contains: `${query.text}`,
            },
          },
          {
            phone2: {
              // search: `${query.text}`,
              contains: `${query.text}`,
            },
          },
          {
            passport: {
              // search: `${query.text}`,
              contains: `${query.text}`,
            },
          },
        ],
      },
      orderBy: {
        id: 'desc',
      },
    });
  }
  async findOne(id: number): Promise<Zayavka> {
    let zayavka = await this.prismaService.zayavka.findUnique({
      where: { id },
      // cacheStrategy :{
      //   ttl : 10
      // }
    });

    if (!zayavka) {
      throw new NotFoundException(`Zayavka with ID ${id} not found`);
    }
    return zayavka;
  }

  async cancel(id: number, data: CancelZayavkaDto): Promise<Zayavka> {
    let zayavka = await this.prismaService.zayavka.findUnique({
      where: { id },
    });

    if (!zayavka) {
      throw new NotFoundException(`Zayavka with ID ${id} not found`);
    }

    if (zayavka.status != STATUS.PROGRESS) {
      throw new NotFoundException(`CAN'T CANCEL Zayavka with ID ${id} `);
    }

    return await this.prismaService.zayavka.update({
      where: { id },
      data: {
        status: STATUS.CANCELED_BY_CLIENT,
        canceled_reason: data.canceled_reason,
      },
    });
  }

  async graph(id: number,) {
    
  }

  async update1(data: Update1_ZayavkaDto){
   
  }

  async update2(data: Update2_ZayavkaDto){
   
  }

  async update3(data: Update3_ZayavkaDto){
   
  }
  async update5(data: Update5_ZayavkaDto){
   
  }
  async update6(data: Update6_ZayavkaDto){
   
  }
  async update7(data: Update7_ZayavkaDto){
   
  }
  async updateFinish(data: UpdateFinish_ZayavkaDto){
   
  }
 

}
