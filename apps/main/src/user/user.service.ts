import { HttpException, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UserCreateDto } from 'apps/user/src/dto/user-create-dto';
import { UserUpdateDto } from 'apps/user/src/dto/user-update-dto';


@Injectable()
export class UserService {
    constructor(@Inject('USER_CLIENT') private userClient: ClientProxy) {}
    async create(data: UserCreateDto) {
      return await new Promise((resolve, reject) => {
        this.userClient.send('user.create', data).subscribe({
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
        this.userClient.send('user.all', '').subscribe({
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
        this.userClient.send('user.findOne', id).subscribe({
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
  
    async update(id: number, updateSuperDto: UserUpdateDto) {
      return await new Promise((resolve, reject) => {
        this.userClient
          .send('user.update', {
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
          .send('user.remove', {
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
