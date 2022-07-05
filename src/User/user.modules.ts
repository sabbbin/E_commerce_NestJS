import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserController } from "./user.controller";

import { User, UserSchema } from "../Schema/auth.schema";
import { UserService } from "./user.service";
import { PasswordModule } from "src/passwordHashing/password.module";

@Module({
    imports:[MongooseModule.forFeature([{name:User.name, schema:UserSchema }]),
    PasswordModule
],
    providers:[UserService],
    controllers:[UserController],
    exports:[UserService]    


})


export class UserModule{}