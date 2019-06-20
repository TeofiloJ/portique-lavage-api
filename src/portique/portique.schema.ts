import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    PortiqueID: Number,
    name: String,
    type: String,
    location: String,
    status:Boolean,
    created_at: { type: Date, default: Date.now }
})