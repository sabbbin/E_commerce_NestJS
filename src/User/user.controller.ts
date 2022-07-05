import { Body, Controller, Get, Post } from '@nestjs/common';
import { RegisterUserDto } from 'src/Dto/register_user.dto';
import { UserService } from './user.service';

@Controller('auth')
export class UserController {
  constructor(private readonly authService: UserService) {}
  @Post('register')
  register(@Body() registerUser: RegisterUserDto) {
    console.log(' hello this is from register');
    return this.authService.register(registerUser);
  }

}


