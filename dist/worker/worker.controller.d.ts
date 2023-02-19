/// <reference types="multer" />
import { DocsService } from './Docs.service';
import { CreateDocsDto } from './dto/create-Docs.dto';
import { UpdateDocsDto } from './dto/update-Docs.dto';
export declare class DocsController {
    private readonly DocsService;
    constructor(DocsService: DocsService);
    create(createDocsDto: CreateDocsDto): any;
    findAll(): any;
    uploadFile(body: CreateDocsDto, files: {
        training?: Express.Multer.File[];
        Application?: Express.Multer.File[];
    }, req: any): Promise<void>;
    findOne(id: string): any;
    update(id: string, updateDocsDto: UpdateDocsDto): any;
    remove(id: string): any;
}
