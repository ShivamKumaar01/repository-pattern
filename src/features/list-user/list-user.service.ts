import { Injectable } from "@nestjs/common";
import { UsersRepository } from "src/infrastructure/repositories/user/user.repository";
import { Users } from "src/domain/users/user.entity";
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from "../create-user/dto/create-user.dto";
import { ListUserDto } from "./dto/list-user.dto";

@Injectable()
export class ListUsersHandler {

    constructor(
        private repository: UsersRepository,
    ) { }

    async handle(query: ListUserDto) {
        const { role, page, limit } = query;

        const where: any = {};
        if (role) {
            where.role = role;
        }

        const [data, total] = await this.repository.search(
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