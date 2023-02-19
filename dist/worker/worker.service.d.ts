import { Repository } from 'typeorm';
import { CreateDocsDto } from './dto/create-Docs.dto';
import { UpdateDocsDto } from './dto/update-Docs.dto';
import { Docs } from './entities/Docs.entity';
export declare class DocsService {
    private repo;
    constructor(repo: Repository<Docs>);
    create(createDocsDto: CreateDocsDto): Promise<Docs[]>;
    findAll(): string;
    findOne(id: number): Promise<Docs>;
    update(id: number, updateDocsDto: UpdateDocsDto): string;
    remove(id: number): string;
}
