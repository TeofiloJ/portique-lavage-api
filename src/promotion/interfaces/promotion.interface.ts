import { Document } from 'mongoose';

export interface Promotion extends Document {
    readonly PromotionID: number
    readonly name: string
	readonly fk_id_program: number
	readonly pourcentage: number
}