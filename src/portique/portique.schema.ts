import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    UserID: String,
    firstname: String,
    name: String,
    phone: String,
    created_at: { type: Date, default: Date.now }
})