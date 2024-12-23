import { NestFactory } from '@nestjs/core';
import { StatisticModule } from './statistic.module';

async function bootstrap() {
  const app = await NestFactory.create(StatisticModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
