import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { USER_MODEL_PROVIDER } from '../constants';
import { Service } from '../service'

@Injectable()
export class UserService extends Service<Model<User>, CreateUserDto> {
    constructor(
        @Inject(USER_MODEL_PROVIDER) private readonly userModel: Model<User>) {
            super(userModel)
         }

    
}