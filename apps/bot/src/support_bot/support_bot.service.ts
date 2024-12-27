import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import * as TelegramBot from 'node-telegram-bot-api';
import { PrismaClientService } from '../prisma_client/prisma_client.service';
import { NumService } from '@app/num';
import {
  ABOUT,
  CARD,
  contactShareText,
  contactText,
  CREDIT_NASIYA,
  INIT_PAYMENT,
  LIMIT,
  METHODS,
  MONTHS,
  MYID,
  operatorFullname,
  operatorPhone,
  operatorText,
  PAYMENT,
  selectText,
  startText,
  SupportCommand,
  SupportEXTRACommand,
  SupportMainCommand,
  SupportMoreCommand,
} from '../commands/support_commands';

@Injectable()
export class SupportBotService implements OnModuleInit {
  public instance: TelegramBot = new TelegramBot(
    process.env.SUPPORT_BOT_TOKEN,
    {
      polling: true,
    },
  );

  constructor(
    @Inject() private prismaService: PrismaClientService,
    @Inject() private num: NumService,
  ) {}

  onModuleInit() {
    this.listenMessage();
    this.listenContact();
  }

  listenMessage() {
    console.log('Support bot started listening messages ...');
    this.instance.on('message', async (msg) => {
      let chatId: number = msg.from.id;

      try {
        let username: string = msg.from.username;
        let fullname: string =
          (msg.from.first_name ?? '') + ' ' + (msg.from.last_name ?? '');

        let command = msg.text;
        console.log(command);

        if (
          command &&
          command.toLowerCase() == SupportCommand.START.toLowerCase()
        ) {
          await this.instance.sendMessage(chatId, startText);

          let bot_user = await this.prismaService.botUser.findUnique({
            where: { username: username, chat_id: chatId.toString() },
          });

          if (bot_user && bot_user.phone) {
            await this.instance.sendMessage(chatId, selectText, {
              reply_markup: {
                resize_keyboard: true,

                keyboard: [
                  [
                    {
                      text: SupportMainCommand.More,
                    },
                  ],
                  [
                    {
                      text: SupportMainCommand.DOCUMENT,
                    },
                  ],
                  [
                    {
                      text: SupportMainCommand.OPERATOR,
                    },
                  ],
                ],
              },
            });
          } else {
            if (!bot_user) {
              await this.prismaService.botUser.create({
                data: {
                  username,
                  chat_id: chatId.toString(),
                  fullname,
                },
              });
            }

            await this.instance.sendMessage(chatId, contactText, {
              reply_markup: {
                resize_keyboard: true,
                remove_keyboard: true,
                one_time_keyboard: true,
                keyboard: [
                  [
                    {
                      text: contactShareText,
                      request_contact: true,
                    },
                  ],
                ],
              },
            });
          }
        } else if (
          command &&
          command.toLowerCase() == SupportMainCommand.More.toLowerCase()
        ) {
          await this.instance.sendMessage(chatId, selectText, {
            reply_markup: {
              resize_keyboard: true,

              keyboard: [
                [
                  {
                    text: SupportMoreCommand.ABOUT,
                  },
                ],
                [
                  {
                    text: SupportMoreCommand.DOCUMENT,
                  },
                  {
                    text: SupportMoreCommand.METHODS,
                  },
                ],
                [
                  {
                    text: SupportMoreCommand.EXTRA,
                  },
                ],
                [
                  {
                    text: SupportMoreCommand.OPERATOR,
                  },
                ],
                [
                  {
                    text: SupportMoreCommand.BACK,
                  },
                ],
              ],
            },
          });
        } else if (
          command &&
          (command.toLowerCase() == SupportMainCommand.DOCUMENT.toLowerCase() ||
            command.toLowerCase() == SupportMoreCommand.DOCUMENT.toLowerCase())
        ) {
          await this.instance.sendDocument(
            chatId,
            'https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf',
          );
        } else if (
          command &&
          command.toLowerCase() == SupportMainCommand.OPERATOR.toLowerCase()
        ) {
          await this.instance.sendMessage(chatId, operatorText);
          await this.instance.sendContact(
            chatId,
            operatorPhone,
            operatorFullname,
          );
        } else if (
          command &&
          command.toLowerCase() == SupportMoreCommand.BACK.toLowerCase()
        ) {
          await this.instance.sendMessage(chatId, selectText, {
            reply_markup: {
              resize_keyboard: true,

              keyboard: [
                [
                  {
                    text: SupportMainCommand.More,
                  },
                ],
                [
                  {
                    text: SupportMainCommand.DOCUMENT,
                  },
                ],
                [
                  {
                    text: SupportMainCommand.OPERATOR,
                  },
                ],
              ],
            },
          });
        } else if (
          command &&
          command.toLowerCase() == SupportMoreCommand.ABOUT.toLowerCase()
        ) {
          await this.instance.sendMessage(chatId, ABOUT, {
            parse_mode: 'HTML',
          });
        } else if (
          command &&
          command.toLowerCase() == SupportMoreCommand.METHODS.toLowerCase()
        ) {
          await this.instance.sendMessage(chatId, METHODS, {
            parse_mode: 'HTML',
          });
        } else if (
          command &&
          command.toLowerCase() == SupportMoreCommand.EXTRA.toLowerCase()
        ) {
          await this.instance.sendMessage(chatId, selectText, {
            reply_markup: {
              resize_keyboard: true,
              keyboard: [
                [
                  {
                    text: SupportEXTRACommand.CREDIT_NASIYA,
                  },
                ],
                [
                  {
                    text: SupportEXTRACommand.LIMIT,
                  },
                ],
                [
                  {
                    text: SupportEXTRACommand.MYID,
                  },
                ],
                [
                  {
                    text: SupportEXTRACommand.CARD,
                  },
                ],
                [
                  {
                    text: SupportEXTRACommand.INIT_PAYMENT,
                  },
                ],
                [
                  {
                    text: SupportEXTRACommand.MONTHS,
                  },
                ],
                [
                  {
                    text: SupportEXTRACommand.PAYMENT,
                  },
                ],
                [
                  {
                    text: SupportEXTRACommand.BACK,
                  },
                ],
              ],
            },
          });
        } else if (
          command &&
          command.toLowerCase() ==
            SupportEXTRACommand.CREDIT_NASIYA.toLowerCase()
        ) {
          await this.instance.sendMessage(chatId, CREDIT_NASIYA);
        } else if (
          command &&
          command.toLowerCase() ==
            SupportEXTRACommand.INIT_PAYMENT.toLowerCase()
        ) {
          await this.instance.sendMessage(chatId, INIT_PAYMENT);
        } else if (
          command &&
          command.toLowerCase() == SupportEXTRACommand.PAYMENT.toLowerCase()
        ) {
          await this.instance.sendMessage(chatId, PAYMENT, {
            parse_mode: 'HTML',
          });
        } else if (
          command &&
          command.toLowerCase() == SupportEXTRACommand.LIMIT.toLowerCase()
        ) {
          await this.instance.sendMessage(chatId, LIMIT);
        } else if (
          command &&
          command.toLowerCase() == SupportEXTRACommand.MYID.toLowerCase()
        ) {
          await this.instance.sendMessage(chatId, MYID, {
            parse_mode: 'HTML',
          });
        } else if (
          command &&
          command.toLowerCase() == SupportEXTRACommand.CARD.toLowerCase()
        ) {
          await this.instance.sendMessage(chatId, CARD);
        } else if (
          command &&
          command.toLowerCase() == SupportEXTRACommand.MONTHS.toLowerCase()
        ) {
          await this.instance.sendMessage(chatId, MONTHS, {
            parse_mode: 'HTML',
          });
        }
      } catch (error) {
        console.log(error);

        this.instance.sendMessage(chatId, 'Some error happened ');
      }
    });
  }

  listenContact() {
    console.log('Support bot started listening contacts ...');
    this.instance.on('contact', async (msg) => {
      let chatId: number = msg.from.id;
      let username: string = msg.from.username;

      try {
        let contact = msg.contact;
        console.log(contact);
        if (contact) {
          await this.prismaService.botUser.update({
            where: {
              username: username,
            },
            data: {
              phone: contact.phone_number,
            },
          });
          await this.instance.sendMessage(chatId, selectText, {
            reply_markup: {
              resize_keyboard: true,

              keyboard: [
                [
                  {
                    text: SupportMainCommand.More,
                  },
                ],
                [
                  {
                    text: SupportMainCommand.DOCUMENT,
                  },
                ],
                [
                  {
                    text: SupportMainCommand.OPERATOR,
                  },
                ],
              ],
            },
          });
        }
      } catch (error) {
        this.instance.sendMessage(chatId, 'Some error happened ');
      }
    });
  }
}
