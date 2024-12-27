import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api';
import { PrismaClientService } from '../prisma_client/prisma_client.service';
import { STATUS } from '@prisma/client';
import { NumService } from '@app/num';
import { AdminCommand } from '../commands/admin_commands';



@Injectable()
export class AdminBotService implements OnModuleInit {
  public instance: TelegramBot = new TelegramBot(process.env.ADMIN_BOT_TOKEN, {
    polling: true,
  });

  constructor(
    @Inject() private prismaService: PrismaClientService,
    @Inject() private num: NumService,
  ) {}

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
  private accessUser = (chatId: number) =>
    this.admins.findIndex((admin) => admin.chatId == chatId) > -1;
  onModuleInit() {
    this.listen();
  }

  listen() {
    console.log('Admin bot started listening...');
    this.instance.on('message', async (msg) => {
      let chatId: number = msg.from.id;

      let command = msg.text?.toUpperCase();

      if (!this.accessUser(chatId)) return;

      try {
        if (command == AdminCommand.ALL) {
          let data = await this.prismaService.zayavka.groupBy({
            by: ['status'],
            _count: true,
            _sum: {
              payment_amount: true,
            },
          });
          let getData = (status: string) =>
            (data as any).find((e: any) => e.status == status) ?? {
              _count: 0,
              _sum: { payment_amount: 0 },
              status: status,
            };
          let FINISHED = getData(STATUS.FINISHED);
          let CANCELED_BY_SCORING = getData(STATUS.CANCELED_BY_SCORING);
          let CANCELED_BY_CLIENT = getData(STATUS.CANCELED_BY_CLIENT);
          let CANCELED_BY_DAILY = getData(STATUS.CANCELED_BY_DAILY);
          let PROGRESS = getData(STATUS.PROGRESS);
          this.instance.sendMessage(
            chatId,
            `📑 <b>Общая статистика</b>\n\n<b>Общий оборот: </b>${this.num.toMoney(FINISHED._sum.payment_amount ?? 0)}\n<b>Общий Заявки:</b> ${FINISHED._count + PROGRESS._count + CANCELED_BY_CLIENT._count + CANCELED_BY_SCORING._count + CANCELED_BY_DAILY._count} \n\n<b>Закончен:</b> ${FINISHED._count} \n<b>Скоринг отказ:</b> ${CANCELED_BY_SCORING._count} \n<b>Клиент отказ:</b> ${CANCELED_BY_CLIENT._count} \n<b>Автоматик отказ:</b> ${CANCELED_BY_DAILY._count} \n<b>Ожидания:</b> ${PROGRESS._count} \n`,
            {
              parse_mode: 'HTML',
            },
          );
        } else if (command == AdminCommand.TODAY) {
          let todayDate = () => {
            var today = new Date();
            today.setTime(today.getTime() + 5 * 60 * 60 * 1000);
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            return new Date(yyyy + '-' + mm + '-' + dd);
          };
          let data = await this.prismaService.zayavka.groupBy({
            by: ['status'],
            _count: true,
            _sum: {
              payment_amount: true,
            },
            where: {
              createdAt: {
                gte: todayDate(),
              },
            },
          });
          let getData = (status: string) =>
            (data as any).find((e: any) => e.status == status) ?? {
              _count: 0,
              _sum: { payment_amount: 0 },
              status: status,
            };
          let FINISHED = getData(STATUS.FINISHED);
          let CANCELED_BY_SCORING = getData(STATUS.CANCELED_BY_SCORING);
          let CANCELED_BY_CLIENT = getData(STATUS.CANCELED_BY_CLIENT);
          let CANCELED_BY_DAILY = getData(STATUS.CANCELED_BY_DAILY);
          let PROGRESS = getData(STATUS.PROGRESS);
          this.instance.sendMessage(
            chatId,
            `📑 <b>Сегодня - статистика</b>\n\n<b>Общий оборот: </b>${this.num.toMoney(FINISHED._sum.payment_amount ?? 0)}\n<b>Общий Заявки:</b> ${FINISHED._count + PROGRESS._count + CANCELED_BY_CLIENT._count + CANCELED_BY_SCORING._count + CANCELED_BY_DAILY._count} \n\n<b>Закончен:</b> ${FINISHED._count} \n<b>Скоринг отказ:</b> ${CANCELED_BY_SCORING._count} \n<b>Клиент отказ:</b> ${CANCELED_BY_CLIENT._count} \n<b>Автоматик отказ:</b> ${CANCELED_BY_DAILY._count} \n<b>Ожидания:</b> ${PROGRESS._count} \n`,
            {
              parse_mode: 'HTML',
            },
          );
        } else if (command == AdminCommand.YESTERDAY) {
          let todayDate = () => {
            var today = new Date();
            today.setTime(today.getTime() + 5 * 60 * 60 * 1000);
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            return new Date(yyyy + '-' + mm + '-' + dd);
          };

          let yesterdayDate = () => {
            var today = new Date();
            today.setTime(
              today.getTime() + 5 * 60 * 60 * 1000 - 24 * 60 * 60 * 1000,
            );
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();
            return new Date(yyyy + '-' + mm + '-' + dd);
          };
          let data = await this.prismaService.zayavka.groupBy({
            by: ['status'],
            _count: true,
            _sum: {
              payment_amount: true,
            },
            where: {
              createdAt: {
                lte: todayDate(),
                gte: yesterdayDate(),
              },
            },
          });
          let getData = (status: string) =>
            (data as any).find((e: any) => e.status == status) ?? {
              _count: 0,
              _sum: { payment_amount: 0 },
              status: status,
            };
          let FINISHED = getData(STATUS.FINISHED);
          let CANCELED_BY_SCORING = getData(STATUS.CANCELED_BY_SCORING);
          let CANCELED_BY_CLIENT = getData(STATUS.CANCELED_BY_CLIENT);
          let CANCELED_BY_DAILY = getData(STATUS.CANCELED_BY_DAILY);
          let PROGRESS = getData(STATUS.PROGRESS);
          this.instance.sendMessage(
            chatId,
            `📑 <b>Вчера - статистика</b>\n\n<b>Общий оборот: </b>${this.num.toMoney(FINISHED._sum.payment_amount ?? 0)}\n<b>Общий Заявки:</b> ${FINISHED._count + PROGRESS._count + CANCELED_BY_CLIENT._count + CANCELED_BY_SCORING._count + CANCELED_BY_DAILY._count} \n\n<b>Закончен:</b> ${FINISHED._count} \n<b>Скоринг отказ:</b> ${CANCELED_BY_SCORING._count} \n<b>Клиент отказ:</b> ${CANCELED_BY_CLIENT._count} \n<b>Автоматик отказ:</b> ${CANCELED_BY_DAILY._count} \n<b>Ожидания:</b> ${PROGRESS._count} \n`,
            {
              parse_mode: 'HTML',
            },
          );
        } else if (command == AdminCommand.MONTH) {
          function monthDate() {
            var today = new Date();
            today.setTime(today.getTime() + 5 * 60 * 60 * 1000);

            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = today.getFullYear();

            return new Date(yyyy + '-' + mm + '-' + '01');
          }

          let data = await this.prismaService.zayavka.groupBy({
            by: ['status'],
            _count: true,
            _sum: {
              payment_amount: true,
            },
            where: {
              createdAt: {
                gte: monthDate(),
              },
            },
          });
          let getData = (status: string) =>
            (data as any).find((e: any) => e.status == status) ?? {
              _count: 0,
              _sum: { payment_amount: 0 },
              status: status,
            };
          let FINISHED = getData(STATUS.FINISHED);
          let CANCELED_BY_SCORING = getData(STATUS.CANCELED_BY_SCORING);
          let CANCELED_BY_CLIENT = getData(STATUS.CANCELED_BY_CLIENT);
          let CANCELED_BY_DAILY = getData(STATUS.CANCELED_BY_DAILY);
          let PROGRESS = getData(STATUS.PROGRESS);
          this.instance.sendMessage(
            chatId,
            `📑 <b>${monthDate().toLocaleString('ru-ru', { month: 'long' }).toUpperCase()} - статистика</b>\n\n<b>Общий оборот: </b>${this.num.toMoney(FINISHED._sum.payment_amount ?? 0)}\n<b>Общий Заявки:</b> ${FINISHED._count + PROGRESS._count + CANCELED_BY_CLIENT._count + CANCELED_BY_SCORING._count + CANCELED_BY_DAILY._count} \n\n<b>Закончен:</b> ${FINISHED._count} \n<b>Скоринг отказ:</b> ${CANCELED_BY_SCORING._count} \n<b>Клиент отказ:</b> ${CANCELED_BY_CLIENT._count} \n<b>Автоматик отказ:</b> ${CANCELED_BY_DAILY._count} \n<b>Ожидания:</b> ${PROGRESS._count} \n`,
            {
              parse_mode: 'HTML',
            },
          );
        }
      } catch (error) {
        this.instance.sendMessage(chatId, 'Some error happened ');
      }
    });
  }
}
