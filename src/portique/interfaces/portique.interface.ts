import { Document } from 'mongoose';

export interface Portique extends Document {
    readonly ID: number
    readonly name: String
    readonly type: String
    readonly location: String
    readonly status: boolean
}