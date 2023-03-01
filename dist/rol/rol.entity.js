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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolEntity = void 0;
const usuario_entity_1 = require("./../usuario/usuario.entity");
const rol_enum_1 = require("./rol.enum");
const typeorm_1 = require("typeorm");
let RolEntity = class RolEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], RolEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 10, nullable: false, unique: true }),
    __metadata("design:type", String)
], RolEntity.prototype, "rolNombre", void 0);
__decorate([
    typeorm_1.ManyToMany(type => usuario_entity_1.UsuarioEntity, usuario => usuario.roles),
    __metadata("design:type", Array)
], RolEntity.prototype, "usuarios", void 0);
RolEntity = __decorate([
    typeorm_1.Entity({ name: 'rol' })
], RolEntity);
exports.RolEntity = RolEntity;
//# sourceMappingURL=rol.entity.js.map