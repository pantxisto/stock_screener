import * as mongoose from 'mongoose';

export const FinancialSchema = new mongoose.Schema({
    cik: String,
    data: [{
      acceptedDate: String,
      accessNumber: String,
      cik: String,
      endDate: String,
      filedDate: String,
      form: String,
      quarter: mongoose.Schema.Types.Mixed,
      report: {
        bs: [{ concept: String, label: String, unit: String, value: mongoose.Schema.Types.Mixed }],
        cf: [{ concept: String, label: String, unit: String, value: mongoose.Schema.Types.Mixed }],
        ic: [{ concept: String, label: String, unit: String, value: mongoose.Schema.Types.Mixed }],
      },
      startDate: String,
      symbol: String,
      year: mongoose.Schema.Types.Mixed,
    }],
  
    symbol: String,
})
