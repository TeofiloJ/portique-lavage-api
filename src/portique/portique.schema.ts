import * as mongoose from 'mongoose';

export const PortiqueSchema = new mongoose.Schema({
    ID: Number,
    name: String,
    type: String,
    location: String,
    status:Boolean,
    created_at: { type: Date, default: Date.now }
})