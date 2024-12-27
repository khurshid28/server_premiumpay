import { Inject, Injectable } from '@nestjs/common';
import { PrismaClientService } from './prisma_client/prisma_client.service';
import { AdminBotService } from './admin_bot/admin_bot.service';
import { NumService } from '@app/num';


@Injectable()
export class BotService {
  private admins: {
    fullname: string;
    chatId: number;
  }[] = [
    {
      fullname: 'Xurshid Ismoilov',
      chatId: 2053690211,
    },
    {
      fullname: 'Muzaffar Mirzayev',
      chatId: 6702785171,
    },
  ];
  constructor(
    @Inject() private prismaService: PrismaClientService,
    @Inject() private bot: AdminBotService,
    @Inject() private num: NumService,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  async scoring(id: number) {
    console.log("bot.scoring ....");
    let zayavka = await this.prismaService.zayavka.findUnique({
      where: { id: id },
      select: {
        id : true,
        fullname : true,
        fillial: true,
        user : true,
        bank : true,
        phone : true,
        phone2 : true
      },
    });

    
    if (!zayavka) {
      return;
    }

    for (let admin of this.admins) {
      this.bot.instance.sendMessage(
        admin.chatId,
        `🚀🚀🚀\n\n<b>Номер:</b>  ${zayavka.id}\n<b>Банк:</b>  ${zayavka.bank.name}\n<b>ФИО:</b>  ${zayavka.fullname}\n<b>Тел.:</b>  ${zayavka.phone ?? zayavka.phone2 ?? ""}\n<b>Магазин:</b>  ${zayavka.fillial.name}\n<b>Оператор:</b>  ${zayavka.user.phone ?? ""}`,
        {
          parse_mode :"HTML"
        }
      );
    }
  }

  async limit(id: number,limit : number) {
    console.log("bot.limit ....");
    let zayavka = await this.prismaService.zayavka.findUnique({
      where: { id: id },
      select: {
        id  : true,
        fullname : true,
        fillial: true,
        user : true,
        bank : true,
        phone : true,
        phone2 : true
      },
    });

    
    if (!zayavka) {
      return;
    }

    for (let admin of this.admins) {
      this.bot.instance.sendMessage(
        admin.chatId,
        `✅✅✅\n<b>ЛИМИТ: ${this.num.toMoney(limit)}</b>\n\n<b>Номер:</b>  ${zayavka.id}\n<b>Банк:</b>  ${zayavka.bank.name}\n<b>ФИО:</b>  ${zayavka.fullname}\n<b>Тел.:</b>  ${zayavka.phone ?? zayavka.phone2 ?? ""}\n<b>Магазин:</b>  ${zayavka.fillial.name}\n<b>Оператор:</b>  ${zayavka.user.phone ?? ""}`,
        {
          parse_mode :"HTML"
        }
      );
    }
  }

  async scoring_cancel(id: number,canceled_reason : string) {
    console.log("bot.scoring_cancel ....");
    let zayavka = await this.prismaService.zayavka.findUnique({
      where: { id: id },
      select: {
        id  : true,
        fullname : true,
        fillial: true,
        user : true,
        bank : true,
        phone : true,
        phone2 : true
      },
    });

    
    if (!zayavka) {
      return;
    }

    for (let admin of this.admins) {
      this.bot.instance.sendMessage(
        admin.chatId,
        `🚫🚫🚫\n<b>Причина: ${canceled_reason}</b>\n\n<b>Номер:</b>  ${zayavka.id}\n<b>Банк:</b>  ${zayavka.bank.name}\n<b>ФИО:</b>  ${zayavka.fullname}\n<b>Тел.:</b>  ${zayavka.phone ?? zayavka.phone2 ?? ""}\n<b>Магазин:</b>  ${zayavka.fillial.name}\n<b>Оператор:</b>  ${zayavka.user.phone ?? ""}`,
        {
          parse_mode :"HTML"
        }
      );
    }
  }


  async contractSuccess(id: number,) {
    console.log("bot.contractSuccess ....");
    let zayavka = await this.prismaService.zayavka.findUnique({
      where: { id: id },
      select: {
        id  : true,
        fullname : true,
        fillial: true,
        user : true,
        bank : true,
        phone : true,
        phone2 : true,
        payment_amount : true,
        expired_month : true,
        amount : true
      },
    });

    
    if (!zayavka) {
      return;
    }
    
    for (let admin of this.admins) {
      this.bot.instance.sendMessage(
        admin.chatId,
        `💰💰💰\n<b>Сумма Товара: ${this.num.toMoney(zayavka.amount)}</b>\n<b>Сумма Рассрочка : ${this.num.toMoney(zayavka.payment_amount)}</b>\n<b>Период: ${zayavka.expired_month}</b>\n\n<b>Номер:</b>  ${zayavka.id}\n<b>Банк:</b>  ${zayavka.bank.name}\n<b>ФИО:</b>  ${zayavka.fullname}\n<b>Тел.:</b>  ${zayavka.phone ?? zayavka.phone2 ?? ""}\n<b>Магазин:</b>  ${zayavka.fillial.name}\n<b>Оператор:</b>  ${zayavka.user.phone ?? ""}`,
        {
          parse_mode :"HTML"
        }
      );
    }
  }
}
