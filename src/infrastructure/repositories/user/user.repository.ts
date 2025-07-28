import { Injectable, NotFoundException } from "@nestjs/common";
import { UsersEntity } from "src/domain/users/user.entity";
import { CreateUserDto } from "src/features/create-user/dto/create-user.dto";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class UsersRepository extends Repository<UsersEntity> {

    constructor(private dataSource: DataSource) {
        super(UsersEntity, dataSource.createEntityManager());
    }

    async createUser(data: CreateUserDto) {
        return await this.save(data);
    }

    async findAll() {
        return await this.find()
    }

    async findByEmail(email: string) {
        return await this.find({ where: { email: email } })
    }

    async findById(id: number) {
        return await this.find({ where: { id: id } })
    }


}