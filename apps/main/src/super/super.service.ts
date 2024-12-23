import { HttpException, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { SuperCreateDto } from 'apps/super/src/dto/super-create-dto';
import { SuperUpdateDto } from 'apps/super/src/dto/super-update-dto';

@Injectable()
export class SuperService {
  constructor(@Inject('SUPER_CLIENT') private superClient: ClientProxy) {}
  async create(data: SuperCreateDto) {
    return await new Promise((resolve, reject) => {
      this.superClient.send('super.create', data).subscribe({
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

  async findAll() {
    return await new Promise((resolve, reject) => {
      this.superClient.send('super.all', '').subscribe({
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
      this.superClient.send('super.findOne', id).subscribe({
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

  async update(id: number, updateSuperDto: SuperUpdateDto) {
    return await new Promise((resolve, reject) => {
      this.superClient
        .send('super.update', {
          id,
          data: updateSuperDto,
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

  async remove(id: number) {
    return await new Promise((resolve, reject) => {
      this.superClient
        .send('super.remove', {
          id,
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
