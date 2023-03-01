"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_i18n_1 = require("nestjs-i18n");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("./users/users.module");
const user_entity_1 = require("./users/entities/user.entity");
const Docs_entity_1 = require("./Docs/entities/Docs.entity");
const Docs_module_1 = require("./Docs/Docs.module");
const flight_module_1 = require("./flight/flight.module");
const flight_entity_1 = require("./flight/entities/flight.entity");
const seat_module_1 = require("./seat/seat.module");
const seat_entity_1 = require("./seat/entities/seat.entity");
const supplier_module_1 = require("./supplier/supplier.module");
const supplier_entity_1 = require("./supplier/entities/supplier.entity");
const SeatToSeat_entity_1 = require("./seat/entities/SeatToSeat.entity");
const flight_company_module_1 = require("./flight-company/flight-company.module");
const flight_company_entity_1 = require("./flight-company/entities/flight-company.entity");
const country_module_1 = require("./country/country.module");
const city_module_1 = require("./city/city.module");
const country_entity_1 = require("./country/entities/country.entity");
const city_entity_1 = require("./city/entities/city.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_i18n_1.I18nModule.forRoot({
                fallbackLanguage: 'en',
                loaderOptions: {
                    path: './src/i18n/',
                    watch: true,
                },
                resolvers: [
                    { use: nestjs_i18n_1.QueryResolver, options: ['lang'] },
                    nestjs_i18n_1.AcceptLanguageResolver,
                ],
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'db-mysql-sfo3-55643-do-user-9120615-0.b.db.ondigitalocean.com',
                port: 25060,
                username: 'doadmin',
                password: 'AVNS_vPJjdBFePeawLu5rHmC',
                database: 'defaultdb',
                entities: [
                    user_entity_1.User,
                    Docs_entity_1.Docs,
                    flight_entity_1.Flight,
                    seat_entity_1.Seat,
                    SeatToSeat_entity_1.SeatToSeat,
                    supplier_entity_1.Supplier,
                    flight_company_entity_1.FlightCompany,
                    country_entity_1.Country,
                    city_entity_1.City,
                ],
                synchronize: true,
            }),
            users_module_1.UsersModule,
            Docs_module_1.DocsModule,
            flight_module_1.FlightModule,
            seat_module_1.SeatModule,
            supplier_module_1.SupplierModule,
            flight_company_module_1.FlightCompanyModule,
            country_module_1.CountryModule,
            city_module_1.CityModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map