import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersRepository } from "src/infrastructure/repositories/user/user.repository";
import { Users } from "src/domain/users/user.entity";
import * as bcrypt from 'bcrypt';

@Injectable()
export class CreateUsersService {

    constructor(
        private usersRepository: UsersRepository,
    ) { }

    async createUser(payload: { data: CreateUserDto }) {
        const user=new Users()
        user.name=payload.data.name
        user.email=payload.data.email
        const password=payload.data.password
        const hashedPassword= await bcrypt.hash(password,10)
        user.password=hashedPassword
        console.log(user,"this is going to save")


        return await this.usersRepository.saveUser(user);
    }
}