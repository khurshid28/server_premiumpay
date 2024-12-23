import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Merchant } from '@prisma/client';
import { MerchantUpdateDto } from './dto/merchant-update-dto';
import { MerchantCreateDto } from './dto/merchant-create-dto';
import { PrismaClientService } from './prisma_client/prisma_client.service';

@Injectable()
export class MerchantService {
  constructor(@Inject() private prismaService: PrismaClientService) {}
    async create(data: MerchantCreateDto): Promise<Merchant> {
      
      
      let merchant = await this.prismaService.merchant.findFirst({
        where: {
          name: data.name,
          work_status: 'WORKING',
        },
      });
  
    
  
      if (merchant) {
        throw new BadRequestException(
          `merchant with already exist with this name`,
        );
      }
      return await this.prismaService.merchant.create({ data });
    }
  
    async findAll(): Promise<Merchant[]> {
      return await this.prismaService.merchant.findMany({
        where :{
          work_status: 'WORKING',
        },
        orderBy: {
          id: 'desc',
        },
      });
    }
  
    async search(query: { text: string | undefined }): Promise<Merchant[]> {
      return await this.prismaService.merchant.findMany({
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
  
    async findOne(id: number): Promise<Merchant> {
      let merchant = await this.prismaService.merchant.findUnique({
        where: { id, work_status: 'WORKING' },
      });
  
      if (!merchant) {
        throw new NotFoundException(`merchant with ID ${id} not found`);
      }
      return merchant;
    }
  
    async update(id: number, data: MerchantUpdateDto): Promise<Merchant> {
      let merchant = await this.prismaService.merchant.findUnique({
        where: { id, work_status: 'WORKING' },
      });
  
      if (!merchant) {
        throw new NotFoundException(`merchant with ID ${id} not found`);
      }
  
      if (!merchant) {
        merchant = await this.prismaService.merchant.findFirst({
          where: {
            name: data.name,
    
            work_status: 'WORKING',
          },
        });
      }
      return await this.prismaService.merchant.update({
        where: { id, work_status: 'WORKING' },
        data,
      });
    }
  
    async remove(id: number): Promise<Merchant> {
      let merchant = await this.prismaService.merchant.findUnique({
        where: { id, work_status: 'WORKING' },
      });
  
      if (!merchant) {
        throw new NotFoundException(`merchant with ID ${id} not found`);
      }
      return await this.prismaService.merchant.update({
        where: { id, work_status: 'WORKING' },
        data: {
          work_status: 'DELETED',
        },
      });
    }
}
