import { HttpService, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ISec } from './interface/sec.interface';
import { CIKS } from './constants';
import { from } from 'rxjs';
import { concatMap, delay, filter, map, skip, tap } from 'rxjs/operators';
import { FilterDto } from './dto/filter.dto';
import { linearRegression } from 'simple-statistics';
import * as mongoose from 'mongoose';

@Injectable()
export class SecService {
  constructor(
    private httpService: HttpService,
    @InjectModel('sec_financial') private secModel: Model<ISec>,
  ) {}

  async createBBDD() {
    let count = 0;
    return await from(CIKS)
      .pipe(
        skip(5558),
        concatMap((cik) =>
          this.httpService
            .get<ISec>(`https://data.sec.gov/api/xbrl/companyfacts/${cik}`)
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

  async createEPSSlopeAndMin() {
    const result = await this.secModel
      .aggregate()
      .limit(2)
      .project(this.epsSlopeAndMinProject)
      .match(this.epsSlopeAndMinQuery)
      // .project({})
      // .count('result')
      .exec();
    return result;
  }

  async filterCompanies(query: FilterDto) {
    // this.secModel.aggregate().project(this.getProjectConfiguration(query));
    const lr = linearRegression([
      [0, 1],
      [1, 2],
      [2, 3],
      [17, -3],
    ]);
    return lr;
  }

  private getProjectConfiguration(query: FilterDto) {
    const prueba = {} as ISec;
    // prueba.facts['us-gaap'].EarningsPerShareDiluted.units.USD,
    return {
      question: 1,
      answer: 1,
    };
  }

  private get epsSlopeAndMinQuery() {
    return {
      'eps.9': { $exists: true },
      // 'eps.1.start': { "$regex": "/.*/01/01.*/}" }
      // start - end = 1 año
    };
  }

  private get epsSlopeAndMinProject() {
    return {
      cik: 1,
      eps: {
        $filter: {
          input: '$facts.us-gaap.EarningsPerShareDiluted.units.USD',
          as: 'data',
          cond: {
            $and: [
              { $eq: ['$$data.form', '10-K'] },
              { $regexMatch: { input: '$$data.start', regex: /01-01/ } },
              { $regexMatch: { input: '$$data.end', regex: /12-31/ } },
              // Quitar los años repetidos
            ],
          },
        },
      },
      _id: 0,
    };
  }
}
