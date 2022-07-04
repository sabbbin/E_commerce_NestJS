import { Body, Controller, Get, Post } from "@nestjs/common";
import { RegisterUserDto } from "src/Dto/register_user.dto";
import { AuthService } from "./auth.service";

@Controller('auth')

export class AuthController{
    constructor(private readonly authService: AuthService){}
    @Post()
     register(
     @Body() user:RegisterUserDto

     ){
      
        console.log( ' hello this is from register')
return        this.authService.register(user)
    }

}



