"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Docs_entity_1 = require("./entities/Docs.entity");
let DocsService = class DocsService {
    constructor(repo) {
        this.repo = repo;
    }
    async create(createDocsDto) {
        const Docs = await this.repo.create(createDocsDto);
        return this.repo.save(Docs);
    }
    findAll() {
        return `This action returns all Docs`;
    }
    async findOne(id) {
        const Docs = await this.repo.findOne({
            where: { id },
            relations: { user: true },
        });
        return Docs;
    }
    update(id, updateDocsDto) {
        return `This action updates a #${id} Docs`;
    }
    remove(id) {
        return `This action removes a #${id} Docs`;
    }
};
DocsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Docs_entity_1.Docs)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DocsService);
exports.DocsService = DocsService;
//# sourceMappingURL=worker.service.js.map