import { Docs } from 'src/Docs/entities/Docs.entity';
export declare enum UserRole {
    admin = "superadmin",
    b2badmin = "b2badmin"
}
export declare class User {
    id: number;
    email: string;
    phone: string;
    photo: string;
    password: string;
    username: string;
    role: UserRole;
    active: boolean;
    Docs: Docs;
}
