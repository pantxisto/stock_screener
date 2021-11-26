import { HttpModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SecController } from './sec.controller';
import { SecService } from './sec.service';
import { SecSchema } from './schema/sec.schema';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: 'sec_financial', schema: SecSchema }]),
  ],
  controllers: [SecController],
  providers: [SecService],
})
export class SecModule {}
