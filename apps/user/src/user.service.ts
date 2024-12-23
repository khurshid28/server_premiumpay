import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UserCreateDto } from './dto/user-create-dto';
import { PrismaClientService } from './prisma_client/prisma_client.service';
import { User } from '@prisma/client';
import { UserUpdateDto } from './dto/user-update-dto';

@Injectable()
export class UserService {
 constructor(@Inject() private prismaService: PrismaClientService) {}
  async create(data: UserCreateDto): Promise<User> {
    
    
    let user = await this.prismaService.super.findFirst({
      where: {
        login: data.login,
        password: data.password,
        work_status: 'WORKING',
      },
    });

    if (!user) {
      user = await this.prismaService.user.findFirst({
        where: {
          login: data.login,
          password: data.password,
          work_status: 'WORKING',
        },
      });
    }
    if (user) {
      throw new BadRequestException(
        `User with already exist with these login credentials`,
      );
    }

    let fillial  = await this.prismaService.fillial.findUnique({
      where: {
        id: data.fillial_id,
        work_status: 'WORKING',
      },
    });
    if (!fillial) {
      throw new NotFoundException(`Fillial with ID ${data.fillial_id} not found`);
    }

    let merchant  = await this.prismaService.merchant.findUnique({
      where: {
        id: data.merchant_id,
        work_status: 'WORKING',
      },
    });
    if (!merchant) {
      throw new NotFoundException(`Merchant with ID ${data.merchant_id} not found`);
    }

    

    if (fillial.merchant_id != data.merchant_id) {
      throw new NotFoundException(`Some wrong at Fillial and Merchant`);
    }

   
   


    return await this.prismaService.user.create({ data });
  }

  async findAll(): Promise<User[]> {
    return await this.prismaService.user.findMany({
      where :{
        work_status: 'WORKING',
      },
      orderBy: {
        id: 'desc',
      },
    });
  }

  async search(query: { text: string | undefined }): Promise<User[]> {
    return await this.prismaService.user.findMany({
      where: {
        fullname: {
          // search: `${query.text}`,
          contains: `${query.text}`,
        },
      },
      orderBy: {
        id: 'desc',
      },
    });
  }

  async findOne(id: number): Promise<User> {
    let user = await this.prismaService.user.findUnique({
      where: { id, work_status: 'WORKING' },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async update(id: number, data: UserUpdateDto): Promise<User> {
    let user = await this.prismaService.user.findUnique({
      where: { id, work_status: 'WORKING' },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    user = await this.prismaService.user.findFirst({
      where: {
        login: data.login,
        password: data.password,
        work_status: 'WORKING',
      },
    });

    if (!user) {
      user = await this.prismaService.user.findFirst({
        where: {
          login: data.login,
          password: data.password,
          work_status: 'WORKING',
        },
      });
    }
    return await this.prismaService.user.update({
      where: { id, work_status: 'WORKING' },
      data,
    });
  }

  async remove(id: number): Promise< User> {
    let user = await this.prismaService.user.findUnique({
      where: { id, work_status: 'WORKING' },
    });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return await this.prismaService.user.update({
      where: { id, work_status: 'WORKING' },
      data: {
        work_status: 'DELETED',
      },
    });
  }
}
