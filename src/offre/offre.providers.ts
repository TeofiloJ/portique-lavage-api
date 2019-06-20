import { Connection } from 'mongoose';

import { OffreSchema } from './offre.schema';
import { OFFRE_MODEL_PROVIDER, DB_PROVIDER } from '../constants';

export const OffreProviders = [
    {
        provide: OFFRE_MODEL_PROVIDER,
        useFactory: (connection: Connection) => connection.model('Offre', OffreSchema),
        inject: [DB_PROVIDER],
    },
];