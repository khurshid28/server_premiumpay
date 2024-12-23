import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { MyId } from '@prisma/client';
import { PrismaClientService } from './prisma_client/prisma_client.service';
import { MyidCheckDto } from './dto/check-myid-dto';

@Injectable()
export class MyidService {
  constructor(@Inject() private prismaService: PrismaClientService) {}
  async profile(passport: string): Promise<MyId> {
    let myid = await this.prismaService.myId.findFirst({
      where: { passport },
      orderBy: {
        id: 'desc',
      },
    });

    if (!myid) {
      throw new NotFoundException(
        `Client with passport ${passport} not found`,
      );
    }
    return myid;
  }

  async check(data: MyidCheckDto) {
    // let myid = await this.prismaService.myId.findFirst({
    //   where: { passport: data.passport },
    //   orderBy: {
    //     id: 'desc',
    //   },
    // });

    // if (!myid) {
    //   throw new NotFoundException(
    //     `Fillial with PASSPORT ${passport} not found`,
    //   );
    // }
    return {
      message: 'Пользователю предоставлено разрешение',
      allow: true,
    };
  }
}
