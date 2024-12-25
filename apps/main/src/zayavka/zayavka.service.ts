import { HttpException, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CancelZayavkaDto } from 'apps/zayavka/src/dto/cancel-zayavka-dto';
import { UpdateFinish_ZayavkaDto } from 'apps/zayavka/src/dto/update-finish-zayavka-dto';
import { Update1_ZayavkaDto } from 'apps/zayavka/src/dto/update1-zayavka-dto';
import { Update2_ZayavkaDto } from 'apps/zayavka/src/dto/update2-zayavka-dto';
import { Update3_ZayavkaDto } from 'apps/zayavka/src/dto/update3-zayavka-dto';
import { Update5_ZayavkaDto } from 'apps/zayavka/src/dto/update5-zayavka-dto';
import { Update6_ZayavkaDto } from 'apps/zayavka/src/dto/update6-zayavka-dto';
import { Update7_ZayavkaDto } from 'apps/zayavka/src/dto/update7-zayavka-dto';

@Injectable()
export class ZayavkaService {
  constructor(
    @Inject('ZAYAVKA_CLIENT') private zayavkaClient: ClientProxy,
    @Inject('BOT_CLIENT') private botClient: ClientProxy,
  ) {}

  async findAll() {
    // await new Promise((resolve, reject) => {
    //   this.botClient
    //     .send('bot.contractSuccess', {
    //       id: 1,
    //      })
    //     .subscribe({
    //       next: (data) => {
    //         console.log(data);

    //         if (data && data.status) {
    //           reject(
    //             new HttpException(
    //               {
    //                 message: data.message,
    //               },
    //               data.status,
    //             ),
    //           );
    //         } else {
    //           resolve(data);
    //         }
    //       },
    //       error: (err) => reject(err),
    //       complete: () => resolve(null),
    //     });
    // });
    return await new Promise((resolve, reject) => {
      this.zayavkaClient.send('zayavka.all', '').subscribe({
        next: (data) => {
          console.log(data);

          if (data && data.status) {
            reject(
              new HttpException(
                {
                  message: data.message,
                },
                data.status,
              ),
            );
          } else {
            resolve(data);
          }
        },
        error: (err) => reject(err),
        complete: () => resolve(null),
      });
    });
  }

  async findOne(id: number) {
    return await new Promise((resolve, reject) => {
      this.zayavkaClient.send('zayavka.findOne', id).subscribe({
        next: (data) => {
          console.log(data);

          if (data && data.status) {
            reject(
              new HttpException(
                {
                  message: data.message,
                },
                data.status,
              ),
            );
          } else {
            resolve(data);
          }
        },
        error: (err) => reject(err),
        complete: () => resolve(null),
      });
    });
  }

  async cancel(id: number, data: CancelZayavkaDto) {
    return await new Promise((resolve, reject) => {
      this.zayavkaClient.send('zayavka.cancel', { id, data }).subscribe({
        next: (data) => {
          console.log(data);

          if (data && data.status) {
            reject(
              new HttpException(
                {
                  message: data.message,
                },
                data.status,
              ),
            );
          } else {
            resolve(data);
          }
        },
        error: (err) => reject(err),
        complete: () => resolve(null),
      });
    });
  }

  async graph(id: number) {
    return await new Promise((resolve, reject) => {
      this.zayavkaClient.send('zayavka.graph', { id }).subscribe({
        next: (data) => {
          console.log(data);

          if (data && data.status) {
            reject(
              new HttpException(
                {
                  message: data.message,
                },
                data.status,
              ),
            );
          } else {
            resolve(data);
          }
        },
        error: (err) => reject(err),
        complete: () => resolve(null),
      });
    });
  }

  async cancelTexts() {
    return {
      data: [
        'Клиент ушел с магазина',
        'Не хватало по лимита',
        'Клиент отказался',
        'Другой',
      ],
    };
  }

  async update1(data: Update1_ZayavkaDto) {
    return await new Promise((resolve, reject) => {
      this.zayavkaClient.send('zayavka.update-1', data).subscribe({
        next: (data) => {
          console.log(data);

          if (data && data.status) {
            reject(
              new HttpException(
                {
                  message: data.message,
                },
                data.status,
              ),
            );
          } else {
            resolve(data);
          }
        },
        error: (err) => reject(err),
        complete: () => resolve(null),
      });
    });
  }

  async update2(data: Update2_ZayavkaDto) {
    return await new Promise((resolve, reject) => {
      this.zayavkaClient.send('zayavka.update-2', data).subscribe({
        next: (data) => {
          console.log(data);

          if (data && data.status) {
            reject(
              new HttpException(
                {
                  message: data.message,
                },
                data.status,
              ),
            );
          } else {
            resolve(data);
          }
        },
        error: (err) => reject(err),
        complete: () => resolve(null),
      });
    });
  }
  async update3(data: Update3_ZayavkaDto) {
    return await new Promise((resolve, reject) => {
      this.zayavkaClient.send('zayavka.update-3', data).subscribe({
        next: (data) => {
          console.log(data);

          if (data && data.status) {
            reject(
              new HttpException(
                {
                  message: data.message,
                },
                data.status,
              ),
            );
          } else {
            resolve(data);
          }
        },
        error: (err) => reject(err),
        complete: () => resolve(null),
      });
    });
  }
  async update5(data: Update5_ZayavkaDto) {
    return await new Promise((resolve, reject) => {
      this.zayavkaClient.send('zayavka.update-5', data).subscribe({
        next: (data) => {
          console.log(data);

          if (data && data.status) {
            reject(
              new HttpException(
                {
                  message: data.message,
                },
                data.status,
              ),
            );
          } else {
            resolve(data);
          }
        },
        error: (err) => reject(err),
        complete: () => resolve(null),
      });
    });
  }
  async update6(data: Update6_ZayavkaDto) {
    return await new Promise((resolve, reject) => {
      this.zayavkaClient.send('zayavka.update-6', data).subscribe({
        next: (data) => {
          console.log(data);

          if (data && data.status) {
            reject(
              new HttpException(
                {
                  message: data.message,
                },
                data.status,
              ),
            );
          } else {
            resolve(data);
          }
        },
        error: (err) => reject(err),
        complete: () => resolve(null),
      });
    });
  }

  async update7(data: Update7_ZayavkaDto) {
    return await new Promise((resolve, reject) => {
      this.zayavkaClient.send('zayavka.update-7', data).subscribe({
        next: (data) => {
          console.log(data);

          if (data && data.status) {
            reject(
              new HttpException(
                {
                  message: data.message,
                },
                data.status,
              ),
            );
          } else {
            resolve(data);
          }
        },
        error: (err) => reject(err),
        complete: () => resolve(null),
      });
    });
  }
  async updateFinish(data: UpdateFinish_ZayavkaDto) {
    return await new Promise((resolve, reject) => {
      this.zayavkaClient.send('zayavka.update-finish', data).subscribe({
        next: (data) => {
          console.log(data);

          if (data && data.status) {
            reject(
              new HttpException(
                {
                  message: data.message,
                },
                data.status,
              ),
            );
          } else {
            resolve(data);
          }
        },
        error: (err) => reject(err),
        complete: () => resolve(null),
      });
    });
  }
}
