"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWorkerDto = void 0;
const openapi = require("@nestjs/swagger");
const mapped_types_1 = require("@nestjs/mapped-types");
const create_Docs_dto_1 = require("./create-Docs.dto");
class UpdateWorkerDto extends (0, mapped_types_1.PartialType)(create_Docs_dto_1.CreateWorkerDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateWorkerDto = UpdateWorkerDto;
//# sourceMappingURL=update-worker.dto.js.map