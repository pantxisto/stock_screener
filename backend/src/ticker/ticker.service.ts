import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { from } from 'rxjs';
import { concatMap, delay, filter, map, tap } from 'rxjs/operators';
import { IMetric } from './interfaces/metric.interface';
import { IStockSymbol } from './interfaces/stockSymbol.interface';
// import * as ExcelJS from 'exceljs';

@Injectable()
export class TickerService {
  constructor(private httpService: HttpService) {}

  // 1º Obtener la lista de las smallcaps de US con 10 años o mas.
  // 2º Obtener todos los test que necesito para una empresa poir su simbolo
  // 3º Crear mi propia BBDD con los datos que me interese de todas las smallcaps
  async getAll() {
    const smallCapsSymbols = [];
    const stocksSymbolsResponse = await this.getStocksSymbols();
    let count = 0;
    await from(stocksSymbolsResponse.symbols)
      .pipe(
        concatMap((symbol) =>
          this.httpService
            .get<IMetric>(
              `http://www.finnhub.io/api/v1/stock/metric?symbol=${symbol}&metric=all`,
              {
                headers: { 'X-Finnhub-Token': 'c6alffaad3id24fn4aig' },
              },
            )
            .pipe(
              delay(1000),
              filter((response) => !!response.data),
              map((response) => response.data),
              tap((response) => {
                count++;
                console.log(count);
                if (
                  !!response.metric.marketCapitalization &&
                  response.metric.marketCapitalization <= 2
                )
                  smallCapsSymbols.push(symbol);

                console.log('scamllCaps: ' + smallCapsSymbols.length);
              }),
            ),
        ),
      )
      .toPromise();

    return smallCapsSymbols;
  }

  private async getStocksSymbols() {
    const response = await this.httpService
      .get<IStockSymbol[]>(
        'http://www.finnhub.io/api/v1/stock/symbol?exchange=US',
        {
          headers: { 'X-Finnhub-Token': 'c6alffaad3id24fn4aig' },
        },
      )
      .pipe(
        filter((response) => !!response.data),
        map((response) => response.data.map((data) => data.symbol)),
      )
      .toPromise();
    return { total: response.length, symbols: response.sort() };
  }

  private getInterface(myObject: any) {
    for (const property in myObject) {
      const propertyPrototype = Object.prototype.toString.call(
        myObject[property],
      );
      if (propertyPrototype == '[object Object]') {
        this.getInterface(myObject[property]);
      } else if (propertyPrototype == '[object Array]') {
        myObject[property] = 'any[]';
      } else if (propertyPrototype == '[object Number]') {
        myObject[property] = 'number';
      } else {
        myObject[property] = 'string';
      }
    }
  }
}
