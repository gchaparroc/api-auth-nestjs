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
exports.RolController = void 0;
const create_rol_dto_1 = require("./dto/create-rol.dto");
const rol_service_1 = require("./rol.service");
const common_1 = require("@nestjs/common");
let RolController = class RolController {
    constructor(rolService) {
        this.rolService = rolService;
    }
    getAll() {
        return this.rolService.getall();
    }
    create(dto) {
        return this.rolService.create(dto);
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RolController.prototype, "getAll", null);
__decorate([
    common_1.UsePipes(new common_1.ValidationPipe({ whitelist: true })),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_rol_dto_1.CreateRolDto]),
    __metadata("design:returntype", void 0)
], RolController.prototype, "create", null);
RolController = __decorate([
    common_1.Controller('rol'),
    __metadata("design:paramtypes", [rol_service_1.RolService])
], RolController);
exports.RolController = RolController;
//# sourceMappingURL=rol.controller.js.map