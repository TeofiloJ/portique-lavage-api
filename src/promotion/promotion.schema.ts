import * as mongoose from 'mongoose';

export const PromotionSchema = new mongoose.Schema({
    PromotionID: Number,
    name: String,
	fk_id_program: Number,
	pourcentage: Number,
    created_at: { type: Date, default: Date.now }
})