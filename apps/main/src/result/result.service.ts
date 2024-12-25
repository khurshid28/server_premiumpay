import { HttpException, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ContractResultDto } from 'apps/bank_result/src/dto/contract-result-dto';
import { ScoringResultDto } from 'apps/bank_result/src/dto/scoring-result-dto';

@Injectable()
export class ResultService {

    constructor(@Inject('RESULT_CLIENT') private resultClient: ClientProxy) {}


     async scoring(data: ScoringResultDto) {
            return await new Promise((resolve, reject) => {
              this.resultClient.send('result.scoring', data).subscribe({
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




          async contract(data: ContractResultDto) {
            return await new Promise((resolve, reject) => {
              this.resultClient.send('result.contract', data).subscribe({
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
