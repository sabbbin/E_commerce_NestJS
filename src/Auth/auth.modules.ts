import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthController } from "./auth.controller";

import { User, UserSchema } from "../Schema/auth.schema";
import { AuthService } from "./auth.service";

@Module({
    imports:[MongooseModule.forFeature([{name:User.name, schema:UserSchema }])],
    providers:[AuthService],
    controllers:[AuthController]


})


export class AuthModule{}