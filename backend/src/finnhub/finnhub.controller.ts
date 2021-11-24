import { Controller, Post } from '@nestjs/common';
import { FinnhubService } from './finnhub.service';

@Controller('finnhub')
export class FinnhubController {
  constructor(private readonly finnhubService: FinnhubService) {}

  @Post("smallCaps/metrics&Financials")
  generateSmallCapsMetricsAndFinancials(): any {
    return this.finnhubService.generateSmallCapsMetricsAndFinancials();
  }
}
