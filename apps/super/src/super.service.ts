import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { Prisma, Super } from '@prisma/client';
import { PrismaClientService } from './prisma_client/prisma_client.service';
import { SuperCreateDto } from './dto/super-create-dto';
import { SuperUpdateDto } from './dto/super-update-dto';

@Injectable()
export class SuperService {
  constructor(@Inject() private prismaService: PrismaClientService) {}
  async create(data: SuperCreateDto): Promise<Super> {
    
    
    let super_user = await this.prismaService.super.findFirst({
      where: {
        login: data.login,
        password: data.password,
        work_status: 'WORKING',
      },
    });

    if (!super_user) {
      super_user = await this.prismaService.user.findFirst({
        where: {
          login: data.login,
          password: data.password,
          work_status: 'WORKING',
        },
      });
    }

    if (super_user) {
      throw new BadRequestException(
        `Super_user with already exist with these login credentials`,
      );
    }
    return await this.prismaService.super.create({ data });
  }

  async findAll(): Promise<Super[]> {
    return await this.prismaService.super.findMany({
      where :{
        work_status: 'WORKING',
      },
      orderBy: {
        id: 'desc',
      },
    });
  }

  async search(query: { text: string | undefined }): Promise<Super[]> {
    return await this.prismaService.super.findMany({
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

  async findOne(id: number): Promise<Super> {
    let super_user = await this.prismaService.super.findUnique({
      where: { id, work_status: 'WORKING' },
    });

    if (!super_user) {
      throw new NotFoundException(`Super_user with ID ${id} not found`);
    }
    return super_user;
  }

  async update(id: number, data: SuperUpdateDto): Promise<Super> {
    let super_user = await this.prismaService.super.findUnique({
      where: { id, work_status: 'WORKING' },
    });

    if (!super_user) {
      throw new NotFoundException(`super_user with ID ${id} not found`);
    }

    super_user = await this.prismaService.super.findFirst({
      where: {
        login: data.login,
        password: data.password,
        work_status: 'WORKING',
      },
    });

    if (!super_user) {
      super_user = await this.prismaService.user.findFirst({
        where: {
          login: data.login,
          password: data.password,
          work_status: 'WORKING',
        },
      });
    }
    return await this.prismaService.super.update({
      where: { id, work_status: 'WORKING' },
      data,
    });
  }

  async remove(id: number): Promise<Super> {
    let super_user = await this.prismaService.super.findUnique({
      where: { id, work_status: 'WORKING' },
    });

    if (!super_user) {
      throw new NotFoundException(`super_user with ID ${id} not found`);
    }
    return await this.prismaService.super.update({
      where: { id, work_status: 'WORKING' },
      data: {
        work_status: 'DELETED',
      },
    });
  }
}
