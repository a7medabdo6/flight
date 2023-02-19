import { UsersService } from '../users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { CreateCodeDto } from 'src/users/dto/create-code.dto';
export declare class AuthService {
    private usersService;
    constructor(usersService: UsersService);
    createCode(CreateCodeDto: CreateCodeDto): Promise<import("../users/entities/user.entity").User>;
    signup(createUserDto: CreateUserDto): Promise<import("../users/entities/user.entity").User>;
    signin(createUserDto: CreateUserDto): Promise<import("../users/entities/user.entity").User>;
}
