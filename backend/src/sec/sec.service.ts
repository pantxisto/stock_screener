import { HttpService, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ISec } from './interface/sec.interface';
import { CIKS } from './constants';
import { from } from 'rxjs';
import { concatMap, delay, filter, map, tap } from 'rxjs/operators';

@Injectable()
export class SecService {
  constructor(
    private httpService: HttpService,
    @InjectModel('sec') private secModel: Model<ISec>,
  ) {}

  async createBBDD() {
    let count = 0;
    await from(CIKS)
      .pipe(
        concatMap((cik) =>
          this.httpService
            .get<ISec>(`https://data.sec.gov/submissions/${cik}'`)
            .pipe(
              delay(1000),
              filter((response) => !!response.data),
              map((response) => response.data),
              tap((response) => {
                count++;
                console.log('ciks: ' + count);
                this.secModel.create(response);
              }),
            ),
        ),
      )
      .toPromise();
  }
}
