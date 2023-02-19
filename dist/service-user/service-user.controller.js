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
exports.ServiceUserController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const service_user_service_1 = require("./service-user.service");
const create_service_user_dto_1 = require("./dto/create-service-user.dto");
const update_service_user_dto_1 = require("./dto/update-service-user.dto");
let ServiceUserController = class ServiceUserController {
    constructor(serviceUserService) {
        this.serviceUserService = serviceUserService;
    }
    create(createServiceUserDto) {
        return this.serviceUserService.create(createServiceUserDto);
    }
    findAll() {
        return this.serviceUserService.findAll();
    }
    findOne(id) {
        return this.serviceUserService.findOne(+id);
    }
    update(id, updateServiceUserDto) {
        return this.serviceUserService.update(+id, updateServiceUserDto);
    }
    remove(id) {
        return this.serviceUserService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./entities/service-user.entity").ServiceUser }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_service_user_dto_1.CreateServiceUserDto]),
    __metadata("design:returntype", void 0)
], ServiceUserController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200, type: [require("./entities/service-user.entity").ServiceUser] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ServiceUserController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/service-user.entity").ServiceUser }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServiceUserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/service-user.entity").ServiceUser }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_service_user_dto_1.UpdateServiceUserDto]),
    __metadata("design:returntype", void 0)
], ServiceUserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./entities/service-user.entity").ServiceUser }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ServiceUserController.prototype, "remove", null);
ServiceUserController = __decorate([
    (0, common_1.Controller)('service-user'),
    __metadata("design:paramtypes", [service_user_service_1.ServiceUserService])
], ServiceUserController);
exports.ServiceUserController = ServiceUserController;
//# sourceMappingURL=service-user.controller.js.map