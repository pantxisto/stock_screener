import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FilterDto } from './dto/filter.dto';
import { SecService } from './sec.service';

@Controller('sec')
export class SecController {
  constructor(private readonly secService: SecService) {}

  @Get('filter')
  @UsePipes(new ValidationPipe({ transform: true }))
  public filterCompanies(
    @Query()
    query: FilterDto,
  ) {
    return this.secService.filterCompanies(query);
  }
 
  @Post('BBDD')
  public createBBDD() {
    return this.secService.createBBDD();
  }

  @Post('epsSlopeAndMin') 
  public createEPSSlopeAndMin(){
    return this.secService.createEPSSlopeAndMin();
  }
}
