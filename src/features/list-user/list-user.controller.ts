import { Body, Controller, Get, Query } from "@nestjs/common";
import { ListUsersHandler } from "./list-user.service";
import { ListUserDto } from "./dto/list-user.dto";

@Controller('users')
export class ListUsersController {

    constructor(private readonly handler: ListUsersHandler) { }

    @Get()
    async listUser(@Query() query: ListUserDto) {
      console.log("this is dto :",query)
    return await this.handler.handle(query);
  }

    

}