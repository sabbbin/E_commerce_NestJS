import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { RegisterUserDto } from "src/Dto/register_user.dto";
import { User, UserDocument } from "../Schema/auth.schema";

@Injectable()

export class AuthService{
    constructor(@InjectModel(User.name) private userModel: Model< UserDocument>) {}
     async register(registerUser:RegisterUserDto ):Promise <User>
     {
        const registeruser=new this.userModel(registerUser)
        
        return registeruser.save()
     }
}