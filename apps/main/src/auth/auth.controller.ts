import { Body, Controller, HttpCode, HttpStatus, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { LoginDto } from 'apps/auth/src/dto/login-dto';

@Controller('auth')
export class AuthController {
  constructor(@Inject() private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('/login')
  async login(@Body() data : LoginDto ) {
    return await this.authService.login(data);
  }
}
