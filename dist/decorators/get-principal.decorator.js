"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPrincipal = void 0;
const common_1 = require("@nestjs/common");
exports.GetPrincipal = common_1.createParamDecorator((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
});
//# sourceMappingURL=get-principal.decorator.js.map