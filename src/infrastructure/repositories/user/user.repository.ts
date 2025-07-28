import { Injectable, NotFoundException } from "@nestjs/common";
import { UsersEntity } from "src/domain/users/user.entity";
import { CreateUserDto } from "src/features/create-user/dto/create-user.dto";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class UsersRepository extends Repository<UsersEntity> {

    constructor(private dataSource: DataSource) {
        super(UsersEntity, dataSource.createEntityManager());
    }

    async saveUser(data: CreateUserDto) {
        return await this.save(data);
    }

    async search(criteria, options) {
        return await this.findAndCount({
            where: criteria,
            ...options
        })
    }

    async findByUuid(uuid:string) {
        return await this.findOne({where:{uuid:uuid}})
    }


}