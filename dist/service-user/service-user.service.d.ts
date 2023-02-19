import { Repository } from 'typeorm';
import { CreateServiceUserDto } from './dto/create-service-user.dto';
import { UpdateServiceUserDto } from './dto/update-service-user.dto';
import { ServiceUser } from './entities/service-user.entity';
export declare class ServiceUserService {
    private repo;
    constructor(repo: Repository<ServiceUser>);
    create(createServiceUserDto: CreateServiceUserDto): Promise<ServiceUser>;
    findAll(): Promise<ServiceUser[]>;
    findOne(id: number): Promise<ServiceUser>;
    update(id: number, updateServiceUserDto: UpdateServiceUserDto): Promise<ServiceUser>;
    remove(id: number): Promise<ServiceUser>;
}
