import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { Role } from './interfaces/role.interface';
import { CreateRoleDto } from './dto/create-role.dto';
import { ROLE_MODEL_PROVIDER } from '../constants';
import { Service } from '../service'

@Injectable()
export class RoleService extends Service<Model<Role>, CreateRoleDto, Role> {
    constructor(
        @Inject(ROLE_MODEL_PROVIDER) private readonly roleModel: Model<Role>) {
            super(roleModel);
        }

    
}