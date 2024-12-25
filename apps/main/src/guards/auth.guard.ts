import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { Request } from 'express';
import { PrismaClientService } from '../prisma_client/prisma_client.service';
import { Role, WORK_STATUS } from '@prisma/client';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    @Inject() private prismaService: PrismaClientService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }

    const payload = await this.jwtService.verifyAsync(token);

    let user: any;
    if (payload['role'] == Role.SUPER) {
      user = await this.prismaService.super.findUnique({
        where: {
          id: parseInt(`${payload['user_id']}`),
        },
      });
    } else if (payload['role'] == Role.USER) {
      user = await this.prismaService.user.findUnique({
        where: {
          id: parseInt(`${payload['user_id']}`),
        },
      });
    } else if (payload['role'] == Role.CALLCENTER) {
      user = await this.prismaService.callCenter.findUnique({
        where: {
          id: parseInt(`${payload['user_id']}`),
        },
      });
    } else if (payload['role'] == Role.BANKUSER) {
      user = await this.prismaService.bankUser.findUnique({
        where: {
          id: parseInt(`${payload['user_id']}`),
        },
      });
    }

    if (!user) {
      throw new UnauthorizedException();
    }
    if (user.work_status != WORK_STATUS.WORKING) {
      throw new UnauthorizedException('You are deleted or blocked ?!');
    }

    request['user'] = user;

    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
