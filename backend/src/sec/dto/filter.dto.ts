import { Type } from 'class-transformer';
import { IsBoolean, IsNumber } from 'class-validator'; // 'class'

export class FilterDto {
  @IsNumber()
  @Type((_) => Number)
  eps: number;

  @IsNumber()
  @Type((_) => Number)
  grossMargin: number;

  @IsNumber()
  @Type((_) => Number)
  debtEquity: number;

  @IsNumber()
  @Type((_) => Number)
  netNet: number;

  @IsNumber()
  @Type((_) => Number)
  roic: number;

  @IsNumber()
  @Type((_) => Number)
  per: number;

  @IsNumber()
  @Type((_) => Number)
  operativeMargin: number;
}
