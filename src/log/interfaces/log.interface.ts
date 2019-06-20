import { Document } from 'mongoose';

export interface Log extends Document {
    readonly ID: number
}