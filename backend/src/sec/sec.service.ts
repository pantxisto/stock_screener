import { HttpService, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ISec } from './interface/sec.interface';

@Injectable()
export class SecService {
  constructor(
    private httpService: HttpService,
    @InjectModel('sec') private secModel: Model<ISec>,
  ) {}

  createBBDD() {
    
    this.secModel.create();
  }
}
