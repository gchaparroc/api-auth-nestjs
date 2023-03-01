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
exports.UsuarioService = void 0;
const rol_entity_1 = require("./../rol/rol.entity");
const rol_repository_1 = require("./../rol/rol.repository");
const message_dto_1 = require("./../common/message.dto");
const usuario_repository_1 = require("./usuario.repository");
const usuario_entity_1 = require("./usuario.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const rol_enum_1 = require("../rol/rol.enum");
let UsuarioService = class UsuarioService {
    constructor(rolRepository, usuarioRepository) {
        this.rolRepository = rolRepository;
        this.usuarioRepository = usuarioRepository;
    }
    async getall() {
        const usuarios = await this.usuarioRepository.find();
        if (!usuarios.length)
            throw new common_1.NotFoundException(new message_dto_1.MessageDto('no hay usuarios en la lista'));
        return usuarios;
    }
    async create(dto) {
        const { nombreUsuario, email } = dto;
        const exists = await this.usuarioRepository.findOne({ where: [{ nombreUsuario: nombreUsuario }, { email: email }] });
        if (exists)
            throw new common_1.BadRequestException(new message_dto_1.MessageDto('ese usuario ya existe'));
        const rolAdmin = await this.rolRepository.findOne({ where: { rolNombre: rol_enum_1.RolNombre.ADMIN } });
        const rolUser = await this.rolRepository.findOne({ where: { rolNombre: rol_enum_1.RolNombre.USER } });
        if (!rolAdmin || !rolUser)
            throw new common_1.InternalServerErrorException(new message_dto_1.MessageDto('los roles aún no han sido creados'));
        const admin = this.usuarioRepository.create(dto);
        admin.roles = [rolAdmin, rolUser];
        await this.usuarioRepository.save(admin);
        return new message_dto_1.MessageDto('admin creado');
    }
};
UsuarioService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(rol_entity_1.RolEntity)),
    __param(1, typeorm_1.InjectRepository(usuario_entity_1.UsuarioEntity)),
    __metadata("design:paramtypes", [rol_repository_1.RolRepository,
        usuario_repository_1.UsuarioRepository])
], UsuarioService);
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map