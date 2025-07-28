import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { CreateUsersService } from "./create-user.service";

@Controller('create-user')
export class CreateUsersController {

    constructor(private readonly usersService: CreateUsersService) { }

    @Post('/')
    async createUser(@Body() body: CreateUserDto) {
        return await this.usersService.createUser({data: body});
    }

    

}