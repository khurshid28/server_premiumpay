import { Module } from '@nestjs/common';

import { PrismaClientModule } from './prisma_client/prisma_client.module';
import { AuthModule } from './auth/auth.module';
import { SuperModule } from './super/super.module';
import { UserModule } from './user/user.module';
import { MerchantModule } from './merchant/merchant.module';
import { FillialModule } from './fillial/fillial.module';
import { MyidModule } from './myid/myid.module';
import { ZayavkaModule } from './zayavka/zayavka.module';
import { CacheModule } from '@nestjs/cache-manager';
import { JwtModule } from '@nestjs/jwt';
import { ResultModule } from './result/result.module';

@Module({
  imports: [
    PrismaClientModule,
    AuthModule,
    SuperModule,
    UserModule,
    MerchantModule,
    FillialModule,
    MyidModule,
    ZayavkaModule,
    // CacheModule.register({
    //   isGlobal: true,
    //   ttl: 10,
    // }),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRES },
    }),
    ResultModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
