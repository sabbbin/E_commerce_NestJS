import { IsString } from "class-validator";

export class RegisterUserDto{
    @IsString()
    public name:string;

    @IsString()
    public password:string;
}