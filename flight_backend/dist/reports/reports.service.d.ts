import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { Report } from './entities/report.entity';
export declare class ReportsService {
    private repo;
    constructor(repo: Repository<Report>);
    create(createReportDto: CreateReportDto, user: User): Promise<Report>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateReportDto: UpdateReportDto): string;
    remove(id: number): string;
}
