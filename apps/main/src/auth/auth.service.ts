import { HttpException, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AuthService {
  constructor(@Inject('AUTH_CLIENT') private authClient: ClientProxy) {}
  async login(data) {
    return await new Promise((resolve, reject) => {
      this.authClient.send('auth.login', data).subscribe({
        next: (data) => {
          console.log(data);

          if (data.status) {
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
