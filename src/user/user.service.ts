import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { USER_MODEL_PROVIDER } from '../constants';
import { Service } from '../service'
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService extends Service<Model<User>, CreateUserDto, User> {
    constructor(@Inject(USER_MODEL_PROVIDER) private readonly userModel: Model<User>) {
            super(userModel)
    }

    async findByEmail(entityEmail): Promise<User> {
        const user = await this.userModel.findOne({ email : entityEmail} );
        return user;
    }

    async findByToken(entityToken): Promise<User> {
        const user = await this.userModel.findOne({ token : entityToken} );
        return user;
    }

}