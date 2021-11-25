export interface IFinancial {
  cik: string;
  data: {
    acceptedDate: string;
    accessNumber: string;
    cik: string;
    endDate: string;
    filedDate: string;
    form: string;
    quarter: number;
    report: {
      bs: { concept: string; label: string; unit: string; value: number }[];
      cf: { concept: string; label: string; unit: string; value: number }[];
      ic: { concept: string; label: string; unit: string; value: number }[];
    };
    startDate: string;
    symbol: string;
    year: number;
  }[];

  symbol: string;
}
