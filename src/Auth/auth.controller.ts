import { Body, Controller, Get, Post } from "@nestjs/common";

import { AuthService } from "./auth.service";

@Controller('/login')
export class AuthController{
 constructor( private readonly authService: AuthService) {}
    @Post()
    login(
        @Body('username') username,
        @Body('password') password
    ){
        console.log('user login ')
        return this.authService.validateUser(username, password)
    }
}