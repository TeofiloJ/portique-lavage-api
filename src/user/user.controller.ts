import { Controller, Get, Param, Post, Body, Query, Delete, UseGuards, Put  } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { User as UserInterface } from './interfaces/user.interface';
import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
@ApiUseTags('Users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        this.userService.create(createUserDto);
    }

    @Get()
    async findAll(): Promise<UserInterface[]> {
        return this.userService.findAll();
    }

    @Get(':userID')
    async find(@Param('userID') userID): Promise<UserInterface> {
        const user = await this.userService.findByID(userID);
        return user;
    }

    @Delete(':userID')
    @UseGuards(AuthGuard('bearer'))
    async delete(@Param('userID') userID) {
        const user = await this.userService.delete(userID);
        return user;
    }

    @Put(':userID')
    async update(@Param('id') id, @Body() userData: UserInterface): Promise<any> {
        userData.id = Number(id);
        return this.userService.update(userData, userData);
    }  

}