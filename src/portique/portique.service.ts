import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { USER_MODEL_PROVIDER } from '../constants';

@Injectable()
export class UserService {
    constructor(
        @Inject(USER_MODEL_PROVIDER) private readonly userModel: Model<User>) { }

    async create(CreateUserDto: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(CreateUserDto);
        return await createdUser.save();
    }

    async findAll(): Promise<User[]> {
        return await this.userModel.find().exec();
    }

    async findByID(ID): Promise<User[]> {
        const user = await this.userModel.find({ UserID : ID} );
        return user;
    }

    async update(UserID, createUserDTO: CreateUserDto): Promise<User> {
        const updatedUser =  this.userModel
            .findByIdAndUpdate(UserID, CreateUserDto, { new: true });
        return await updatedUser;
    }

    async delete(ID): Promise<any> {
        const deletedUser = await this.userModel.remove({ userID : ID });
        return deletedUser;
    }
}