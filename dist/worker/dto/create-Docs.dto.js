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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDocsDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const user_entity_1 = require("../../users/entities/user.entity");
class CreateDocsDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { BOD: { required: true, type: () => String }, Ni_Number: { required: true, type: () => Number }, Adress: { required: true, type: () => String }, phone: { required: true, type: () => String }, next_of_kin: { required: true, type: () => String }, sex: { required: true, type: () => String }, next_of_kin_Contact: { required: true, type: () => String }, training: { required: true, type: () => String }, Application: { required: true, type: () => String }, user: { required: true, type: () => require("../../users/entities/user.entity").User } };
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDocsDto.prototype, "BOD", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", Number)
], CreateDocsDto.prototype, "Ni_Number", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDocsDto.prototype, "Adress", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDocsDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDocsDto.prototype, "next_of_kin", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDocsDto.prototype, "sex", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateDocsDto.prototype, "next_of_kin_Contact", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateDocsDto.prototype, "training", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateDocsDto.prototype, "Application", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", user_entity_1.User)
], CreateDocsDto.prototype, "user", void 0);
exports.CreateDocsDto = CreateDocsDto;
//# sourceMappingURL=create-Docs.dto.js.map