import { Module } from "@nestjs/common";
import { PasswordModule } from "src/passwordHashing/password.module";
import { UserModule } from "src/User/user.modules";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
    imports:[UserModule, PasswordModule],
    providers:[AuthService],
    controllers:[AuthController]
   
})

export class AuthModel{}