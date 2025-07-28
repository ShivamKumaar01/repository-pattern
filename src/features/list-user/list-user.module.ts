import { Module } from '@nestjs/common';
import { UsersRepository } from 'src/infrastructure/repositories/user/user.repository';
import { ListUsersService } from './list-user.service';
import { ListUsersController } from './list-user.controller';



@Module({
    imports: [],
    controllers: [ListUsersController],
    providers: [ListUsersService, UsersRepository],
    exports: [ListUsersService]
})
export class CreateUserModule { }