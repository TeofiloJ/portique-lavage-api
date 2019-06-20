import { Document } from 'mongoose';

export interface Role extends Document {
    readonly ID: number
    readonly name: string
}