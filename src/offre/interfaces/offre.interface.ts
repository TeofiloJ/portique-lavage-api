import { Document } from 'mongoose';

export interface Offre extends Document {
    readonly ID: number
    readonly name: String
    readonly promotion: String
}