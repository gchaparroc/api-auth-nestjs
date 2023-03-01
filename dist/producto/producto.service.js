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
exports.ProductoService = void 0;
const producto_repository_1 = require("./producto.repository");
const producto_entity_1 = require("./producto.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const message_dto_1 = require("../common/message.dto");
let ProductoService = class ProductoService {
    constructor(productoRepository) {
        this.productoRepository = productoRepository;
    }
    async getAll() {
        console.log("Todos los productos");
        const list = await this.productoRepository.find();
        if (!list.length) {
            throw new common_1.NotFoundException(new message_dto_1.MessageDto('la lista está vacía'));
        }
        return list;
    }
    async findById(id) {
        const producto = await this.productoRepository.findOne(id);
        if (!producto) {
            throw new common_1.NotFoundException(new message_dto_1.MessageDto('no existe'));
        }
        return producto;
    }
    async findByNombre(nombre) {
        const producto = await this.productoRepository.findOne({ nombre: nombre });
        return producto;
    }
    async create(dto) {
        const exists = await this.findByNombre(dto.nombre);
        if (exists)
            throw new common_1.BadRequestException(new message_dto_1.MessageDto('ese nombre ya existe'));
        const producto = this.productoRepository.create(dto);
        await this.productoRepository.save(producto);
        return new message_dto_1.MessageDto(`producto ${producto.nombre} creado`);
    }
    async update(id, dto) {
        const producto = await this.findById(id);
        if (!producto)
            throw new common_1.NotFoundException(new message_dto_1.MessageDto('no existe'));
        const exists = await this.findByNombre(dto.nombre);
        if (exists && exists.id !== id)
            throw new common_1.BadRequestException(new message_dto_1.MessageDto('ese producto ya existe'));
        dto.nombre ? producto.nombre = dto.nombre : producto.nombre = producto.nombre;
        dto.precio ? producto.precio = dto.precio : producto.precio = producto.precio;
        await this.productoRepository.save(producto);
        return new message_dto_1.MessageDto(`producto ${producto.nombre} actualizado`);
    }
    async delete(id) {
        const producto = await this.findById(id);
        await this.productoRepository.delete(producto);
        return new message_dto_1.MessageDto(`producto ${producto.nombre} eliminado`);
    }
};
ProductoService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(producto_entity_1.ProductoEntity)),
    __metadata("design:paramtypes", [producto_repository_1.ProductoRepository])
], ProductoService);
exports.ProductoService = ProductoService;
//# sourceMappingURL=producto.service.js.map