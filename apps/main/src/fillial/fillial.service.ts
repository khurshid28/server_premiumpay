import { HttpException, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { FillialCreateDto } from 'apps/fillial/src/dto/fillial-create-dto';
import { FillialUpdateDto } from 'apps/fillial/src/dto/fillial-update-dto';


@Injectable()
export class FillialService {
   constructor(@Inject('FILLIAL_CLIENT') private fillialClient: ClientProxy) {}
        async create(data: FillialCreateDto) {
          return await new Promise((resolve, reject) => {
            this.fillialClient.send('fillial.create', data).subscribe({
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
            this.fillialClient.send('fillial.all', '').subscribe({
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
            this.fillialClient.send('fillial.findOne', id).subscribe({
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
      
        async update(id: number, updateSuperDto: FillialUpdateDto) {
          return await new Promise((resolve, reject) => {
            this.fillialClient
              .send('fillial.update', {
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
            this.fillialClient
              .send('fillial.remove', {
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
