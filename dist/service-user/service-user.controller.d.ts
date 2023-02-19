import { ServiceUserService } from './service-user.service';
import { CreateServiceUserDto } from './dto/create-service-user.dto';
import { UpdateServiceUserDto } from './dto/update-service-user.dto';
export declare class ServiceUserController {
    private readonly serviceUserService;
    constructor(serviceUserService: ServiceUserService);
    create(createServiceUserDto: CreateServiceUserDto): Promise<import("./entities/service-user.entity").ServiceUser>;
    findAll(): Promise<import("./entities/service-user.entity").ServiceUser[]>;
    findOne(id: string): Promise<import("./entities/service-user.entity").ServiceUser>;
    update(id: string, updateServiceUserDto: UpdateServiceUserDto): Promise<import("./entities/service-user.entity").ServiceUser>;
    remove(id: string): Promise<import("./entities/service-user.entity").ServiceUser>;
}
