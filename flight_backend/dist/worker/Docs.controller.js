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
exports.DocsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const Docs_service_1 = require("./Docs.service");
const create_Docs_dto_1 = require("./dto/create-Docs.dto");
const update_Docs_dto_1 = require("./dto/update-Docs.dto");
const current_user_interceptor_1 = require("../users/interceptors/current-user.interceptor");
const auth_guard_1 = require("../guards/auth.guard");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const file_validator_1 = require("../utils/file-validator");
const path_1 = require("path");
const Docs_dto_1 = require("./dto/Docs.dto");
const serialize_interceptor_1 = require("../interceptors/serialize.interceptor");
let DocsController = class DocsController {
    constructor(DocsService) {
        this.DocsService = DocsService;
    }
    create(createDocsDto) {
        return this.DocsService.create(createDocsDto);
    }
    findAll() {
        return this.DocsService.findAll();
    }
    async uploadFile(body, files, req) {
        var _a, _b, _c, _d;
        const isEmpty = Object.keys(files).length === 0;
        if (isEmpty || !files || req.fileValidationError) {
            throw new common_1.BadRequestException(req.fileValidationError);
        }
        let training = '';
        let Application = 'test';
        console.log(files, 'test');
        const product = await this.DocsService.create(Object.assign(Object.assign({}, body), { training: (_b = (_a = files === null || files === void 0 ? void 0 : files.training) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.filename, Application: (_d = (_c = files === null || files === void 0 ? void 0 : files.Application) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.filename }));
        throw new common_1.HttpException('CREATED', common_1.HttpStatus.CREATED);
    }
    findOne(id) {
        return this.DocsService.findOne(+id);
    }
    update(id, updateDocsDto) {
        return this.DocsService.update(+id, updateDocsDto);
    }
    remove(id) {
        return this.DocsService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/Docs.entity").Docs }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_Docs_dto_1.CreateDocsDto]),
    __metadata("design:returntype", void 0)
], DocsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: String }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DocsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([
        { name: 'training', maxCount: 1 },
        { name: 'Application', maxCount: 1 },
    ], {
        fileFilter: file_validator_1.FileFilter,
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, callback) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                const ext = (0, path_1.extname)(file.originalname);
                const filename = `${uniqueSuffix}${ext}`;
                callback(null, filename);
            },
        }),
    })),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_Docs_dto_1.CreateDocsDto, Object, Object]),
    __metadata("design:returntype", Promise)
], DocsController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/Docs.entity").Docs }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_Docs_dto_1.UpdateDocsDto]),
    __metadata("design:returntype", void 0)
], DocsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocsController.prototype, "remove", null);
DocsController = __decorate([
    (0, common_1.Controller)('docs'),
    (0, common_1.UseInterceptors)(current_user_interceptor_1.CurrentUserInterceptor),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, serialize_interceptor_1.Serialize)(Docs_dto_1.DocsDto),
    __metadata("design:paramtypes", [Docs_service_1.DocsService])
], DocsController);
exports.DocsController = DocsController;
//# sourceMappingURL=Docs.controller.js.map