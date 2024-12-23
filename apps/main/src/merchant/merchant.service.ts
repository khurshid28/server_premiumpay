import { HttpException, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { MerchantCreateDto } from 'apps/merchant/src/dto/merchant-create-dto';
import { MerchantUpdateDto } from 'apps/merchant/src/dto/merchant-update-dto';


@Injectable()
export class MerchantService {
  constructor(@Inject('MERCHANT_CLIENT') private userClient: ClientProxy) {}
      async create(data: MerchantCreateDto) {
        return await new Promise((resolve, reject) => {
          this.userClient.send('merchant.create', data).subscribe({
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
          this.userClient.send('merchant.all', '').subscribe({
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
          this.userClient.send('merchant.findOne', id).subscribe({
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
    
      async update(id: number, updateSuperDto: MerchantUpdateDto) {
        return await new Promise((resolve, reject) => {
          this.userClient
            .send('merchant.update', {
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
          this.userClient
            .send('merchant.remove', {
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
