import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ZayavkaService } from './zayavka.service';
import { CancelZayavkaDto } from 'apps/zayavka/src/dto/cancel-zayavka-dto';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { Update1_ZayavkaDto } from 'apps/zayavka/src/dto/update1-zayavka-dto';
import { Update2_ZayavkaDto } from 'apps/zayavka/src/dto/update2-zayavka-dto';
import { Update3_ZayavkaDto } from 'apps/zayavka/src/dto/update3-zayavka-dto';
import { Update5_ZayavkaDto } from 'apps/zayavka/src/dto/update5-zayavka-dto';
import { Update6_ZayavkaDto } from 'apps/zayavka/src/dto/update6-zayavka-dto';
import {  UpdateFinish_ZayavkaDto } from 'apps/zayavka/src/dto/update-finish-zayavka-dto';
import { Update7_ZayavkaDto } from 'apps/zayavka/src/dto/update7-zayavka-dto';
import { AuthGuard } from '../guards/auth.guard';
import { Zayavka } from '@prisma/client';
import { UserAuthGuard } from '../guards/user-auth.guard';



@UseGuards(AuthGuard)
@Controller('zayavka')
export class ZayavkaController {
  constructor(
    private readonly zayavkaService: ZayavkaService,
  ) {}

  @Get('/all')
  findAll( @Req() req: Request) {

    // console.log(req["user"]);
    
    return this.zayavkaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string){
    return await this.zayavkaService.findOne(+id); 
  }

  @Delete('/cancel/:id')
  @UseGuards(UserAuthGuard)
  cancel(@Param('id') id: string, @Body() data: CancelZayavkaDto) {
    return this.zayavkaService.cancel(+id, data);
  }


  @Get('/cancel-texts')
  @UseGuards(UserAuthGuard)
  cancelTexts() {
    return this.zayavkaService.cancelTexts();
  }

  @Get('/graph/:id')
  @UseGuards(UserAuthGuard)
  graph(@Param("id") id : string) {
    return this.zayavkaService.graph(+id);
  }


  @Post('/update-1')
  @UseGuards(UserAuthGuard)
  update1(@Body() data : Update1_ZayavkaDto) {
    return this.zayavkaService.update1(data);
  }


  @Put('/update-2')
  @UseGuards(UserAuthGuard)
  update2(@Body() data : Update2_ZayavkaDto) {
    return this.zayavkaService.update2(data);
  }
  @Put('/update-3')
  @UseGuards(UserAuthGuard)
  update3(@Body() data : Update3_ZayavkaDto) {
    return this.zayavkaService.update3(data);
  }
  @Put('/update-5')
  @UseGuards(UserAuthGuard)
  update5(@Body() data : Update5_ZayavkaDto) {
    return this.zayavkaService.update5(data);
  }
  @Put('/update-6')
  @UseGuards(UserAuthGuard)
  update6(@Body() data : Update6_ZayavkaDto) {
    return this.zayavkaService.update6(data);
  }

  @Put('/update-7')
  @UseGuards(UserAuthGuard)
  update7(@Body() data : Update7_ZayavkaDto) {
    return this.zayavkaService.update7(data);
  }

  @Put('/update-finish')
  @UseGuards(UserAuthGuard)
  updateFinish(@Body() data : UpdateFinish_ZayavkaDto) {
    return this.zayavkaService.updateFinish(data);
  }





}
