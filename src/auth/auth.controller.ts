import { Controller, Get, UseGuards, Post, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { ApiUseTags } from '@nestjs/swagger';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private readonly userService: UserService) {}

  @Post()
  async register(@Body() CreateUserDto: CreateUserDto) {
    this.userService.create(CreateUserDto);
  }

  @Get()
  @UseGuards(AuthGuard())
  login() {

  }
}
