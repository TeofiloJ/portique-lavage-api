import * as mongoose from 'mongoose';
import * as passportLocalMongoose from 'passport-local-mongoose';

export const UserSchema = new mongoose.Schema({
    ID: String,
    firstname: String,
    name: String,
    email: String,
    created_at: { type: Date, default: Date.now }
});
UserSchema.plugin(passportLocalMongoose);