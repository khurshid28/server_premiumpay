import { Body, Controller, Get, HttpCode, HttpStatus, Inject, Param, Post, UseGuards } from '@nestjs/common';
import { MyidCheckDto } from 'apps/myid/src/dto/check-myid-dto';
import { MyidService } from './myid.service';
import { AuthGuard } from '../guards/auth.guard';


@UseGuards(AuthGuard)
@Controller('myid')
export class MyidController {
  constructor(@Inject() private myidService: MyidService) {}
  @Post('/check')
  @HttpCode(HttpStatus.OK)
  async check(@Body() data : MyidCheckDto) {
       return  await this.myidService.check(data)
  }
  @Post('/code')
  async profileCode() {}
  @Post('/image')
  async profileImg() {}
  @Get('/profile/:passport')
  @HttpCode(HttpStatus.OK)
  async profile(@Param('passport') passport: string) {
    return  await this.myidService.profile(passport)
  }
}
