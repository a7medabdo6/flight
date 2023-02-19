"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateServiceUserDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const create_service_user_dto_1 = require("./create-service-user.dto");
class UpdateServiceUserDto extends (0, swagger_1.PartialType)(create_service_user_dto_1.CreateServiceUserDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateServiceUserDto = UpdateServiceUserDto;
//# sourceMappingURL=update-service-user.dto.js.map