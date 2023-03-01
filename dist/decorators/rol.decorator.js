"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolDecorator = void 0;
const common_1 = require("@nestjs/common");
exports.RolDecorator = (...roles) => common_1.SetMetadata('roles', roles);
//# sourceMappingURL=rol.decorator.js.map