import { Connection, Document, Model } from 'mongoose';

import { LogSchema } from './log.schema';
import { LOG_MODEL_PROVIDER, DB_PROVIDER } from '../constants';

export const LogProviders = [
    {
        provide: LOG_MODEL_PROVIDER,
        useFactory: (connection: Connection) => connection.model('Log', LogSchema),
        inject: [DB_PROVIDER],
    },
];