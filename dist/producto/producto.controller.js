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
exports.ProductoController = void 0;
const rol_enum_1 = require("./../rol/rol.enum");
const rol_guard_1 = require("./../guards/rol.guard");
const jwt_guard_1 = require("./../guards/jwt.guard");
const producto_service_1 = require("./producto.service");
const common_1 = require("@nestjs/common");
const producto_dto_1 = require("./dto/producto.dto");
const rol_decorator_1 = require("../decorators/rol.decorator");
let ProductoController = class ProductoController {
    constructor(productoService) {
        this.productoService = productoService;
    }
    async getAll() {
        console.log("getAll controller");
        return await this.productoService.getAll();
    }
    async getOne(id) {
        return await this.productoService.findById(id);
    }
    async create(dto) {
        return await this.productoService.create(dto);
    }
    async update(id, dto) {
        return await this.productoService.update(id, dto);
    }
    async delete(id) {
        return await this.productoService.delete(id);
    }
};
__decorate([
    rol_decorator_1.RolDecorator(rol_enum_1.RolNombre.ADMIN),
    common_1.UseGuards(jwt_guard_1.JwtAuthGuard, rol_guard_1.RolesGuard),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductoController.prototype, "getAll", null);
__decorate([
    rol_decorator_1.RolDecorator(rol_enum_1.RolNombre.ADMIN, rol_enum_1.RolNombre.USER),
    common_1.UseGuards(jwt_guard_1.JwtAuthGuard, rol_guard_1.RolesGuard),
    common_1.Get(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductoController.prototype, "getOne", null);
__decorate([
    rol_decorator_1.RolDecorator(rol_enum_1.RolNombre.ADMIN),
    common_1.UseGuards(jwt_guard_1.JwtAuthGuard, rol_guard_1.RolesGuard),
    common_1.UsePipes(new common_1.ValidationPipe({ whitelist: true })),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [producto_dto_1.ProductoDto]),
    __metadata("design:returntype", Promise)
], ProductoController.prototype, "create", null);
__decorate([
    rol_decorator_1.RolDecorator(rol_enum_1.RolNombre.ADMIN),
    common_1.UseGuards(jwt_guard_1.JwtAuthGuard, rol_guard_1.RolesGuard),
    common_1.UsePipes(new common_1.ValidationPipe({ whitelist: true })),
    common_1.Put(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, producto_dto_1.ProductoDto]),
    __metadata("design:returntype", Promise)
], ProductoController.prototype, "update", null);
__decorate([
    rol_decorator_1.RolDecorator(rol_enum_1.RolNombre.ADMIN),
    common_1.UseGuards(jwt_guard_1.JwtAuthGuard, rol_guard_1.RolesGuard),
    common_1.Delete(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductoController.prototype, "delete", null);
ProductoController = __decorate([
    common_1.Controller('producto'),
    __metadata("design:paramtypes", [producto_service_1.ProductoService])
], ProductoController);
exports.ProductoController = ProductoController;
//# sourceMappingURL=producto.controller.js.map