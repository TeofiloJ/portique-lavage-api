import { Document } from 'mongoose';

export interface Tarif extends Document {
    readonly TarifID: number
    readonly price: string
}