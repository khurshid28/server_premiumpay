import {
  HttpException,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaClientService } from './prisma_client/prisma_client.service';
import { LoginDto } from './dto/login-dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @Inject() private prismaService: PrismaClientService,
    private jwtService: JwtService,
  ) {}

  async login(data: LoginDto) {
    let user: any = await this.prismaService.user.findFirst({
      where: {
        login: data.login,
        password: data.password,
      },
    });
    if (!user) {
      user = await this.prismaService.super.findFirst({
        where: {
          login: data.login,
          password: data.password,
        },
      });
    }

    if (!user) {
      throw new UnauthorizedException();
    }

    const payload = { user_id: user.id, role: user.role };
    return {
      user,
      access_token: await this.jwtService.signAsync(payload),
      message: 'Logined successfully',
    };
  }
}