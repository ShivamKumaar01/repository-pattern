import { Module } from '@nestjs/common';
import { CreateUsersService } from './create-user.service';
import { UsersRepository } from 'src/infrastructure/repositories/user/user.repository';
import { CreateUsersController } from './create-user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';



@Module({
    imports: [],
    controllers: [CreateUsersController],
    providers: [CreateUsersService, UsersRepository],
    exports: [CreateUsersService]
})
export class CreateUserModule { }