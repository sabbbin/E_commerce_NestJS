import { Injectable } from "@nestjs/common";


import { UserService } from "../User/user.service";
import { PasswordService } from "src/passwordHashing/password.service";

@Injectable()
export class AuthService{
    constructor(private userservice: UserService,
        private passwordService:PasswordService
        ) {}
    async validateUser(username:string, password:string):Promise<any | undefined>{
     const user= await this.userservice.singleUser(username)
    const isMatch= await this.passwordService.comparePassword(user.password,password)
     if (isMatch){
        return 'login Successful'
     }
     return 'Invalid Username or Password'
    }
}