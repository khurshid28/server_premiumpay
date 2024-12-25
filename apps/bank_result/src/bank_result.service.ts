import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClientService } from './prisma_client/prisma_client.service';
import { ScoringResultDto } from './dto/scoring-result-dto';
import { ContractResultDto, RESULT_STATUS } from './dto/contract-result-dto';
import { STATUS } from '@prisma/client';

@Injectable()
export class BankResultService {
  constructor(@Inject() private prismaService: PrismaClientService) {}
  async scoring(data: ScoringResultDto) {
    let zayavka = await this.prismaService.zayavka.findUnique({
      where: { id: data.app_id },
    });

    if (!zayavka) {
      throw new NotFoundException(`Заявка не найден, app_id : ${data.app_id}`);
    }

    if (data.status == RESULT_STATUS.SUCCESS) {
      await this.prismaService.zayavka.update({
        where: { id: zayavka.id },
        data: {
          contract_id: data.contractId,
          limit: data.limit_summa,
        },
      });
    } else {
      await this.prismaService.zayavka.update({
        where: { id: zayavka.id },
        data: {
          contract_id: data.contractId,
          status: STATUS.CANCELED_BY_SCORING,
          canceled_reason: data.canceled_reason,
        },
      });
    }

    return {
      message: 'Received scoring data',
      app_id: data.app_id,
      contractId: data.contractId,
      limit_summa: data.limit_summa,
      canceled_reason: data.canceled_reason,
      status: data.status,
    };
  }

  async contract(data: ContractResultDto) {
    let zayavka = await this.prismaService.zayavka.findFirst({
      where: { contract_id: data.contractId },
    });

    if (!zayavka) {
      throw new NotFoundException(
        `Заявка не найден, contractId : ${data.contractId}`,
      );
    }

    if (data.status == RESULT_STATUS.SUCCESS) {
      await this.prismaService.zayavka.update({
        where: { id: zayavka.id },
        data: {
          contract_id: data.contractId,
          status: STATUS.FINISHED,
        },
      });
    } else {
      await this.prismaService.zayavka.update({
        where: { id: zayavka.id },
        data: {
          contract_id: data.contractId,
          status: STATUS.CANCELED_BY_SCORING,
          canceled_reason: RESULT_STATUS.FAILED,
        },
      });
    }

    return {
      message: 'Received contract data',
      app_id: zayavka.id,
      contractId: data.contractId,
      status: data.status,
    };
  }
}
