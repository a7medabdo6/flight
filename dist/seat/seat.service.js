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
exports.SeatService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const seat_entity_1 = require("./entities/seat.entity");
let SeatService = class SeatService {
    constructor(repo) {
        this.repo = repo;
    }
    async create(createSeatDto, flight) {
        const seat = await this.repo.create(createSeatDto);
        seat.flight = flight;
        return this.repo.save(seat);
    }
    async findAllByIds(ids) {
        console.log(ids, 'id');
        if (!ids) {
            throw new common_1.UnauthorizedException('unAuthorized');
        }
        const plan = await this.repo.find({
            where: { id: (0, typeorm_2.In)(ids) },
        });
        if (!plan) {
            throw new common_1.NotFoundException('plan not found');
        }
        return plan;
    }
    async findAll() {
        const seat = await this.repo.find({});
        return seat;
    }
    async findOne(id) {
        console.log(id, 'id');
        if (!id) {
            throw new common_1.UnauthorizedException('unAuthorized');
        }
        const seat = await this.repo.findOne({ where: { id } });
        if (!seat) {
            throw new common_1.NotFoundException('seat not found');
        }
        return seat;
    }
    async update(id, updateSeatDto) {
        const seat = await this.findOne(id);
        if (!seat) {
            throw new common_1.NotFoundException('seat not found');
        }
        Object.assign(seat, updateSeatDto);
        return this.repo.save(seat);
    }
    async remove(id) {
        const seat = await this.findOne(id);
        if (!seat) {
            throw new common_1.NotFoundException('seat not found');
        }
        return this.repo.remove(seat);
    }
};
SeatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(seat_entity_1.Seat)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SeatService);
exports.SeatService = SeatService;
//# sourceMappingURL=seat.service.js.map