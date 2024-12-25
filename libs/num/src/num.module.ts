import { Module } from '@nestjs/common';
import { NumService } from './num.service';

@Module({
  providers: [NumService],
  exports: [NumService],
})
export class NumModule {}
