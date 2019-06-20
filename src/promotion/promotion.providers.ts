import { Connection } from 'mongoose';

import { PromotionSchema } from './promotion.schema';
import { PROMOTION_MODEL_PROVIDER, DB_PROVIDER } from '../constants';

export const PromotionProviders = [
    {
        provide: PROMOTION_MODEL_PROVIDER,
        useFactory: (connection: Connection) => connection.model('Promotion', PromotionSchema),
        inject: [DB_PROVIDER],
    },
];