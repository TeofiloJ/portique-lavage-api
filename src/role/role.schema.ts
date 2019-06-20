import * as mongoose from 'mongoose';

export const RoleSchema = new mongoose.Schema({
    ID: Number,
    created_at: { type: Date, default: Date.now }
})