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
exports.Docs = void 0;
const openapi = require("@nestjs/swagger");
const user_entity_1 = require("../../users/entities/user.entity");
const typeorm_1 = require("typeorm");
let Docs = class Docs {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, BOD: { required: true, type: () => String }, Ni_Number: { required: true, type: () => Number }, Adress: { required: true, type: () => String }, phone: { required: true, type: () => String }, next_of_kin: { required: true, type: () => String }, sex: { required: true, type: () => String }, next_of_kin_Contact: { required: true, type: () => String }, training: { required: true, type: () => String }, Application: { required: true, type: () => String }, user: { required: true, type: () => require("../../users/entities/user.entity").User } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Docs.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Docs.prototype, "BOD", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Docs.prototype, "Ni_Number", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Docs.prototype, "Adress", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Docs.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Docs.prototype, "next_of_kin", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Docs.prototype, "sex", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Docs.prototype, "next_of_kin_Contact", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Docs.prototype, "training", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Docs.prototype, "Application", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => user_entity_1.User, (user) => user.Docs),
    __metadata("design:type", user_entity_1.User)
], Docs.prototype, "user", void 0);
Docs = __decorate([
    (0, typeorm_1.Entity)()
], Docs);
exports.Docs = Docs;
//# sourceMappingURL=Docs.entity.js.map