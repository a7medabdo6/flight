import { Docs } from 'src/Docs/entities/Docs.entity';
import { Flight } from 'src/flight/entities/flight.entity';
export declare class UserDto {
    id: number;
    email: string;
    username: string;
    role: string;
    createBy: number;
    Docs: Docs;
    flight: Flight[];
}
