import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ErrorInterceptor } from '../middlewares/error-interceptor';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_CLIENT',
        transport: Transport.TCP,
        options: {
          port: 3001,
          host: 'localhost',
        },
      },
    ]),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    // {
    //   provide: 'APP_INTERCEPTOR',
    //   useClass: ErrorInterceptor,
    // },
  ],
})
export class AuthModule {}
