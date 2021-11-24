import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StockModule } from './finnhub/finnhub.module';
import { SecModule } from './sec/sec.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://stock:stock@stock.screener.database:27017', {
      dbName: 'stock_screener',
      authSource: 'admin',
    }),
    StockModule,
    SecModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
