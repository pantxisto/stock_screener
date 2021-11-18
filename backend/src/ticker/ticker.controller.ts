import { Controller, Get } from '@nestjs/common';
import { TickerService } from './ticker.service';

@Controller('ticker')
export class TickerController {
  constructor(private readonly tickerService: TickerService) {}

  @Get()
  getAll(): any {
    return this.tickerService.getAll();
  }
}
