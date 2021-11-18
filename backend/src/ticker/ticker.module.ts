import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TickerController } from './ticker.controller';
import { TickerService } from './ticker.service';

@Module({
  imports: [HttpModule],
  controllers: [TickerController],
  providers: [TickerService],
})
export class TickerModule {}
