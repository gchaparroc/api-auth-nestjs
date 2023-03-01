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
exports.UsuarioEntity = void 0;
const rol_entity_1 = require("./../rol/rol.entity");
const typeorm_1 = require("typeorm");
const bcryptjs_1 = require("bcryptjs");
let UsuarioEntity = class UsuarioEntity {
    async hashPasword() {
        if (!this.password)
            return;
        this.password = await bcryptjs_1.hash(this.password, 10);
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('increment'),
    __metadata("design:type", Number)
], UsuarioEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 10, nullable: true }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "nombre", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 10, nullable: false, unique: true }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "nombreUsuario", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', length: 10, nullable: false, unique: true }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "password", void 0);
__decorate([
    typeorm_1.ManyToMany(type => rol_entity_1.RolEntity, rol => rol.usuarios, { eager: true }),
    typeorm_1.JoinTable({
        name: 'usuario_rol',
        joinColumn: { name: 'usuario_id' },
        inverseJoinColumn: { name: 'rol_id' }
    }),
    __metadata("design:type", Array)
], UsuarioEntity.prototype, "roles", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    typeorm_1.BeforeUpdate(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsuarioEntity.prototype, "hashPasword", null);
UsuarioEntity = __decorate([
    typeorm_1.Entity({ name: 'usuario' })
], UsuarioEntity);
exports.UsuarioEntity = UsuarioEntity;
//# sourceMappingURL=usuario.entity.js.map