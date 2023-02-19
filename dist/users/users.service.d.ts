import { Repository } from 'typeorm';
import { CreateCodeDto } from './dto/create-code.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
export declare enum UserRole {
    admin = "superadmin",
    b2badmin = "b2badmin"
}
export declare class UsersService {
    private repo;
    constructor(repo: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    createcode(CreateCodeDto: CreateCodeDto): Promise<User>;
    findAll(userRole: string): Promise<User[]>;
    findOne(id: number): Promise<User>;
    findOneByEmail(email: string): Promise<User>;
    update(id: number, updateUser: Partial<User>): Promise<User>;
    remove(id: number): Promise<User>;
}
