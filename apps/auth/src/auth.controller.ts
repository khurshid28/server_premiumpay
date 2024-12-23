import { Controller, Get, HttpException, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { LoginDto } from './dto/login-dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern('auth.login')
  async login(@Payload() data: LoginDto) {
    try {
      return await this.authService.login(data);
    } catch (error) {
      return new HttpException(error.message, error.status);
        
    }
  }
}
