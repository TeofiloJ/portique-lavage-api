import { Document } from 'mongoose';

export interface User extends Document {
    readonly UserID: String
    readonly firstname: String
    readonly name: String
    readonly phone: String
    readonly created_at: Date
}