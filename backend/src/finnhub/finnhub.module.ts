import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FinancialSchema } from './schema/financial.schema';
import { MetricSchema } from './schema/metric.schema';
import { FinnhubController } from './finnhub.controller';
import { FinnhubService } from './finnhub.service';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: 'finnhub_metrics', schema: MetricSchema }]),
    MongooseModule.forFeature([{ name: 'finnhub_financials', schema: FinancialSchema }]),
  ],
  controllers: [FinnhubController],
  providers: [FinnhubService],
})
export class StockModule {}
