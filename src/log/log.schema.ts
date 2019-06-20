import * as mongoose from 'mongoose';

export const LogSchema = new mongoose.Schema({
    ID: Number,
    created_at: { type: Date, default: Date.now }
})