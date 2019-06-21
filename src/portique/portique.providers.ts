import { Connection, Document, Model } from 'mongoose';
import { PortiqueSchema } from './portique.schema';
import { PORTIQUE_MODEL_PROVIDER, DB_PROVIDER } from '../constants';

export const PortiqueProviders = [
    {
        provide: PORTIQUE_MODEL_PROVIDER,
        useFactory: (connection: Connection) => connection.model('Portique', PortiqueSchema),
        inject: [DB_PROVIDER],
    },
];