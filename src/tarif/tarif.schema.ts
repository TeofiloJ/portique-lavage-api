import * as mongoose from 'mongoose';

export const TarifSchema = new mongoose.Schema({
    TarifID: Number,
    price: String,
    created_at: { type: Date, default: Date.now }
})