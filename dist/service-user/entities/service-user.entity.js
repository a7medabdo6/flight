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
exports.ServiceUser = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let ServiceUser = class ServiceUser {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, initials: { required: true, type: () => String }, lcds: { required: true, type: () => Number }, age_ate_refferal: { required: true, type: () => String }, home_address: { required: true, type: () => String }, school_address: { required: true, type: () => String }, sex: { required: true, type: () => String }, start_date: { required: true, type: () => String }, end_date: { required: true, type: () => String }, qurdian: { required: true, type: () => String }, qurdian_contact: { required: true, type: () => Number }, relationship: { required: true, type: () => String }, support_worker: { required: true, type: () => String }, assesment_date: { required: true, type: () => String }, disability: { required: true, type: () => String }, ethnicity: { required: true, type: () => String }, religion: { required: true, type: () => String }, compliment_of_the_household: { required: true, type: () => Number } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ServiceUser.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceUser.prototype, "initials", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ServiceUser.prototype, "lcds", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceUser.prototype, "age_ate_refferal", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceUser.prototype, "home_address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceUser.prototype, "school_address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceUser.prototype, "sex", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceUser.prototype, "start_date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceUser.prototype, "end_date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceUser.prototype, "qurdian", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ServiceUser.prototype, "qurdian_contact", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceUser.prototype, "relationship", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceUser.prototype, "support_worker", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceUser.prototype, "assesment_date", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceUser.prototype, "disability", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceUser.prototype, "ethnicity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ServiceUser.prototype, "religion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ServiceUser.prototype, "compliment_of_the_household", void 0);
ServiceUser = __decorate([
    (0, typeorm_1.Entity)()
], ServiceUser);
exports.ServiceUser = ServiceUser;
//# sourceMappingURL=service-user.entity.js.map