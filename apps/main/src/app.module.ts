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

    CacheModule.register({
      isGlobal: true,
      ttl : 10,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
