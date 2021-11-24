import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SecController } from './sec.controller';
import { SecService } from './sec.service';

@Module({
  imports: [
    HttpModule,
    // MongooseModule.forFeature([{ name: 'sec', schema: MetricSchema }]),
  ],
  controllers: [SecController],
  providers: [SecService],
})
export class SecModule {}
