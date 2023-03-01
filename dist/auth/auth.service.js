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
exports.AuthService = void 0;
const jwt_1 = require("@nestjs/jwt");
const rol_repository_1 = require("./../rol/rol.repository");
const message_dto_1 = require("./../common/message.dto");
const auth_repository_1 = require("./auth.repository");
const usuario_entity_1 = require("./../usuario/usuario.entity");
const rol_entity_1 = require("./../rol/rol.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const rol_enum_1 = require("../rol/rol.enum");
let AuthService = class AuthService {
    constructor(rolRepository, authRepository, jwtService) {
        this.rolRepository = rolRepository;
        this.authRepository = authRepository;
        this.jwtService = jwtService;
    }
    async getall() {
        const usuarios = await this.authRepository.find();
        if (!usuarios.length)
            throw new common_1.NotFoundException(new message_dto_1.MessageDto('no hay usuarios en la lista'));
        return usuarios;
    }
    async create(dto) {
        const { nombreUsuario, email } = dto;
        const exists = await this.authRepository.findOne({ where: [{ nombreUsuario: nombreUsuario }, { email: email }] });
        if (exists)
            throw new common_1.BadRequestException(new message_dto_1.MessageDto('ese usuario ya existe'));
        const rolUser = await this.rolRepository.findOne({ where: { rolNombre: rol_enum_1.RolNombre.USER } });
        if (!rolUser)
            throw new common_1.InternalServerErrorException(new message_dto_1.MessageDto('los roles aún no han sido creados'));
        const user = this.authRepository.create(dto);
        user.roles = [rolUser];
        await this.authRepository.save(user);
        return new message_dto_1.MessageDto('usuario creado');
    }
    async login(dto) {
        console.log(dto);
        let passwordOK;
        const { nombreUsuario } = dto;
        const usuario = await this.authRepository.findOne({ where: [{ nombreUsuario: nombreUsuario }] });
        if (!usuario)
            return new common_1.UnauthorizedException(new message_dto_1.MessageDto('no existe el usuario'));
        if (dto.password === usuario.password) {
            passwordOK = true;
        }
        else {
            passwordOK = false;
        }
        console.log(passwordOK);
        if (!passwordOK)
            return new common_1.UnauthorizedException(new message_dto_1.MessageDto('contraseña errónea'));
        const payload = {
            id: usuario.id,
            nombreUsuario: usuario.nombreUsuario,
            email: usuario.email,
            roles: usuario.roles.map(rol => rol.rolNombre)
        };
        const token = await this.jwtService.sign(payload);
        return { token };
    }
    async refresh(dto) {
        const usuario = await this.jwtService.decode(dto.token);
        const payload = {
            id: usuario[`id`],
            nombreUsuario: usuario[`nombreUsuario`],
            email: usuario[`email`],
            roles: usuario[`roles`]
        };
        const token = await this.jwtService.sign(payload);
        return { token };
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(rol_entity_1.RolEntity)),
    __param(1, typeorm_1.InjectRepository(usuario_entity_1.UsuarioEntity)),
    __metadata("design:paramtypes", [rol_repository_1.RolRepository,
        auth_repository_1.AuthRepository,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map