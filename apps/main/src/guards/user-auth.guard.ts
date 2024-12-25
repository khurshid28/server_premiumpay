
import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { JwtService } from '@nestjs/jwt';
import { Role } from '@prisma/client';

  import { Request } from 'express';
  
  @Injectable()
  export class UserAuthGuard implements CanActivate {
   
  
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest();
     
      if (request["user"]["role"] != Role.USER) {
        return false;
      }
      return true;
    }
    
  }
  