import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
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

@Controller('zayavka')
export class ZayavkaController {
  constructor(
    private readonly zayavkaService: ZayavkaService,

    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  @Get('/all')
  findAll() {
    return this.zayavkaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    let key = '/zayavka/' + id;
    
    const cacheData = await this.cacheManager.get(key);

    if (cacheData) return cacheData;

    let zayavka = await this.zayavkaService.findOne(+id);
    await this.cacheManager.set(key, zayavka);

    return zayavka;
  }

  @Delete('/cancel/:id')
  cancel(@Param('id') id: string, @Body() data: CancelZayavkaDto) {
    return this.zayavkaService.cancel(+id, data);
  }




  @Get('/cancel-texts')
  cancelTexts() {
    return this.zayavkaService.cancelTexts();
  }

  @Get('/graph/:id')
  graph(@Param("id") id : string) {
    return this.zayavkaService.graph(+id);
  }



  @Post('/update-1')
  update1(@Body() data : Update1_ZayavkaDto) {
    return this.zayavkaService.update1(data);
  }


  @Put('/update-2')
  update2(@Body() data : Update2_ZayavkaDto) {
    return this.zayavkaService.update2(data);
  }
  @Put('/update-3')
  update3(@Body() data : Update3_ZayavkaDto) {
    return this.zayavkaService.update3(data);
  }
  @Put('/update-5')
  update5(@Body() data : Update5_ZayavkaDto) {
    return this.zayavkaService.update5(data);
  }
  @Put('/update-6')
  update6(@Body() data : Update6_ZayavkaDto) {
    return this.zayavkaService.update6(data);
  }

  @Put('/update-7')
  update7(@Body() data : Update7_ZayavkaDto) {
    return this.zayavkaService.update7(data);
  }

  @Put('/update-finish')
  updateFinish(@Body() data : UpdateFinish_ZayavkaDto) {
    return this.zayavkaService.updateFinish(data);
  }














}
