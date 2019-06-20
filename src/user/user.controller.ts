import { Controller, Get, Post, Body, Param } from '@nestjs/common';
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

    // @Get(':userID')
    // async getUser(@Param('userID') userID) {
    //     const user = await this.userService.getUser(userID);
    //     return user;
    // }
}