import { Injectable } from "@nestjs/common";
import { UsersRepository } from "src/infrastructure/repositories/user/user.repository";
import { UsersEntity } from "src/domain/users/user.entity";
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from "../create-user/dto/create-user.dto";
import { ListUserDto } from "./dto/list-user.dto";

@Injectable()
export class ListUsersService {

    constructor(
        private usersRepository: UsersRepository,
    ) { }

    async listUser(dto: ListUserDto) {
        const { role, page, limit } = dto;

        const where: any = {};
        if (role) {
            where.role = role;
        }

        const [data, total] = await this.usersRepository.search(
            where,
            {
                skip: (page - 1) * limit,
                take: limit,
            }
        );

        return {
            data,
            total,
            page,
            pageSize: limit,
            totalPages: Math.ceil(total / limit),
        };
    }
}