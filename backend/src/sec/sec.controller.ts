import { Controller, Get, Post } from '@nestjs/common';
import { SecService } from './sec.service';

@Controller('sec')
export class SecController {
  constructor(private readonly secService: SecService) {}

  @Post('createBBDD')
  public createBBDD() {
    return this.secService.createBBDD();
  }
}
