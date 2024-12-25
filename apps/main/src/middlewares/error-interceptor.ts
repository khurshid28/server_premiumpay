// import {
//   CallHandler,
//   ExecutionContext,
//   HttpException,
//   HttpStatus,
//   Injectable,
//   NestInterceptor,
// } from '@nestjs/common';
// import { catchError, Observable, throwError } from 'rxjs';

// function doExeption(err) {
//   console.log("doExeption : ",err);

//   try {
//     if (err.status == 'error') {
//       return new HttpException('Something went wrong', HttpStatus.BAD_GATEWAY);
//     } else {
//       var error = err.message;

//       if (err.response && err.response.error) {
//         error = err.response.error;
//       }
//       return new HttpException(error, err.status);
//     }
//   } catch (error) {
//     return new HttpException('Something went wrong', HttpStatus.BAD_GATEWAY);
//   }
// }

// @Injectable()
// export class ErrorInterceptor implements NestInterceptor {
//   intercept(
//     context: ExecutionContext,
//     next: CallHandler<any>,
//   ): Observable<any> | Promise<Observable<any>> {
//     return next.handle().pipe(
//       catchError((err) => {
//         return throwError(doExeption(err));
//       }),
//     );
//   }
// }
 