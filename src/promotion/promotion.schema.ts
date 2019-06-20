import * as mongoose from 'mongoose';

export const PromotionSchema = new mongoose.Schema({
    PromotionID: Number,
    name: String,
	fk_id_program: number,
	pourcentage: number,
    created_at: { type: Date, default: Date.now }
})