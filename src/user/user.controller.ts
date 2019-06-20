import { Controller, Get, Param, Post, Body, Query, Delete  } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { User as UserInterface } from './interfaces/user.interface';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    async create(@Body() CreateUserDto: CreateUserDto) {
        this.userService.create(CreateUserDto);
    }

    @Get()
    async findAll(): Promise<UserInterface[]> {
        return this.userService.findAll();
    }

    @Get(':userID')
    async find(@Param('userID') userID) {
        const user = await this.userService.findByID(userID);
        return user;
    }

    @Delete(':userID')
    async delete(@Param('userID') userID) {
        const user = await this.userService.delete(userID);
        return user;
    }
}