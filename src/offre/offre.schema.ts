import * as mongoose from 'mongoose';

export const OffreSchema = new mongoose.Schema({
    ID: Number,
    name: String,
    promotion: String,
    created_at: { type: Date, default: Date.now }
})