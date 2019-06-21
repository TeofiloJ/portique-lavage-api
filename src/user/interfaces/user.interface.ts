import { Document } from 'mongoose';

export interface User extends Document  {
    readonly ID: string
    readonly firstname: string
    readonly name: string
    readonly email: string
    readonly created_at: Date
    readonly password : string
    readonly token : string
}