import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClientService } from './prisma_client/prisma_client.service';
import { Fillial, Prisma } from '@prisma/client';
import { FillialCreateDto } from './dto/fillial-create-dto';
import { FillialUpdateDto } from './dto/fillial-update-dto';

@Injectable()
export class FillialService {
 constructor(@Inject() private prismaService: PrismaClientService) {}
     async create(data: FillialCreateDto): Promise<Fillial> {
       
       
       let fillial = await this.prismaService.fillial.findFirst({
         where: {
           name: data.name,
           work_status: 'WORKING',
         },
       });
   
     
   
       if (fillial) {
         throw new BadRequestException(
           `Fillial with already exist with this name`,
         );
       }

       let merchant = await this.prismaService.merchant.findFirst({
        where: {
          id: data.merchant_id,
          work_status: 'WORKING',
        },
      });

      if (!merchant) {
        throw new NotFoundException(`merchant with ID ${data.merchant_id} not found`);
      }


       return await this.prismaService.fillial.create({  data  : {
        name : data.name,
        region : data.region,
        merchant_id : data.merchant_id,
        hisob_raqam : `${data.hisob_raqam}`,
        nds : `${data.nds}`,
        bank_name : `${data.bank_name ?? ""}`,
        mfo : `${data.mfo}`,
        inn : `${data.inn}`,
        director_name : data.director_name,
        director_phone : data.director_phone,
        percent_type : data.percent_type,
        cashback_percent  :data.cachback_percent,
        cashback_amount : data.cachback_amount,
        expired_months : data.expired_months as any
        
 

       } });
     }
   
     async findAll(): Promise<Fillial[]> {
       return await this.prismaService.fillial.findMany({
         where :{
           work_status: 'WORKING',
         },
         orderBy: {
           id: 'desc',
         },
       });
     }
   
     async search(query: { text: string | undefined }): Promise<Fillial[]> {
       return await this.prismaService.fillial.findMany({
         where: {
           name: {
             // search: `${query.text}`,
             contains: `${query.text}`,
           },
         },
         orderBy: {
           id: 'desc',
         },
       });
     }
   
     async findOne(id: number): Promise<Fillial> {
       let Fillial = await this.prismaService.fillial.findUnique({
         where: { id, work_status: 'WORKING' },
       });
   
       if (!Fillial) {
         throw new NotFoundException(`Fillial with ID ${id} not found`);
       }
       return Fillial;
     }
   
     async update(id: number, data: FillialUpdateDto): Promise<Fillial> {
       let fillial = await this.prismaService.fillial.findUnique({
         where: { id, work_status: 'WORKING' },
       });
   
       if (!fillial) {
         throw new NotFoundException(`merchant with ID ${id} not found`);
       }
       
   
       return await this.prismaService.fillial.update({
         where: { id, work_status: 'WORKING' },
         data,
       });
     }
   
     async remove(id: number): Promise<Fillial> {
       let fillial = await this.prismaService.fillial.findUnique({
         where: { id, work_status: 'WORKING' },
       });
   
       if (!fillial) {
         throw new NotFoundException(`fillial with ID ${id} not found`);
       }
       return await this.prismaService.fillial.update({
         where: { id, work_status: 'WORKING' },
         data: {
           work_status: 'DELETED',
         },
       });
     }
}
