import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    constructor(private  usersService:UsersService){}

    async validateUser(username:string,pass:string):Promise<any>{
        const user = await this.usersService.findOne(username);

        if(user && user.password === pass){
            console.log("user alreasy exist");
            return user;
        }
        return null;
    }
}
