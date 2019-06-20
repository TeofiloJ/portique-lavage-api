import { Connection } from 'mongoose';

import { RoleSchema } from './role.schema';
import { ROLE_MODEL_PROVIDER, DB_PROVIDER } from '../constants';

export const RoleProviders = [
    {
        provide: ROLE_MODEL_PROVIDER,
        useFactory: (connection: Connection) => connection.model('Role', RoleSchema),
        inject: [DB_PROVIDER],
    },
];