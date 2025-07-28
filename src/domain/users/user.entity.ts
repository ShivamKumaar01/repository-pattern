import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserRole } from "./enums/user-role";



@Entity('users')
export class UsersEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'uuid', default: () => 'uuid_generate_v4()', unique: true })
    uuid: string;

    @Column({ type: 'varchar', length: 250 })
    name: string;

    @Column({ type: 'varchar', length: 320, unique: true })
    email: string;

    @Column({ type: 'enum', enum: UserRole, default: UserRole.user })
    role: UserRole;

    @Column({ type: 'varchar'})
    password: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'deleted_at', nullable: true })
    deletedAt: Date;
}