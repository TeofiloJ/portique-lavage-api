import { Connection } from 'mongoose';

import { TarifSchema } from './tarif.schema';
import { TARIF_MODEL_PROVIDER, DB_PROVIDER } from '../constants';

export const TarifProviders = [
    {
        provide: TARIF_MODEL_PROVIDER,
        useFactory: (connection: Connection) => connection.model('Tarif', UserSchema),
        inject: [DB_PROVIDER],
    },
];