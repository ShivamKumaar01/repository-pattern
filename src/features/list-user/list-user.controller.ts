import { Body, Controller, Post } from "@nestjs/common";
import { ListUsersService } from "./list-user.service";
import { ListUserDto } from "./dto/list-user.dto";

@Controller('list-user')
export class ListUsersController {

    constructor(private readonly usersService: ListUsersService) { }

    @Post('/')
    async listUser(@Body() dto: ListUserDto) {
    return await this.usersService.listUser(dto);
  }

    

}