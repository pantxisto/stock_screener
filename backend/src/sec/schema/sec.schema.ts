import * as mongoose from 'mongoose';

export const SecSchema = new mongoose.Schema({
  cik: mongoose.Schema.Types.Mixed,
  entityName: mongoose.Schema.Types.Mixed,
  facts: Object
});
