import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('register')
  @UseGuards(AuthGuard())
  register() {
  }

  @Get('login')
  @UseGuards(AuthGuard())
  login() {

  }
}
