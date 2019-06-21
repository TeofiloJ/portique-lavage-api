import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    ID: String,
    firstname: String,
    name: String,
    email: String,
    password: String,
    token: String,
    created_at: { type: Date, default: Date.now }
});