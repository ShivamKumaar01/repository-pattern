import { Module } from '@nestjs/common';
import { UsersRepository } from 'src/infrastructure/repositories/user/user.repository';
import { ListUsersHandler } from './list-user.service';
import { ListUsersController } from './list-user.controller';



@Module({
    imports: [],
    controllers: [ListUsersController],
    providers: [ListUsersHandler, UsersRepository],
    exports: [ListUsersHandler]
})
export class ListUserModule { }