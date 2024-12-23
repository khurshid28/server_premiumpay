import { HttpException, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MyidCheckDto } from 'apps/myid/src/dto/check-myid-dto';

@Injectable()
export class MyidService {
  constructor(@Inject('MYID_CLIENT') private myidClient: ClientProxy) {}

  async check(data: MyidCheckDto) {
    return await new Promise((resolve, reject) => {
      this.myidClient.send('myid.check', data).subscribe({
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
  async profileCode() {}
  async profileImg() {}
  async profile(passport: string) {
    return await new Promise((resolve, reject) => {
      this.myidClient
        .send('myid.profile', {
          passport,
        })
        .subscribe({
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
