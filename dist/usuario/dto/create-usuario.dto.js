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
exports.CreateUsuarioDto = void 0;
const class_validator_1 = require("class-validator");
const is_not_blank_decorator_1 = require("../../decorators/is-not-blank.decorator");
class CreateUsuarioDto {
}
__decorate([
    class_validator_1.IsString(),
    class_validator_1.MaxLength(10, { message: 'nombre: longitud máxima de 10' }),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "nombre", void 0);
__decorate([
    is_not_blank_decorator_1.IsNotBlank({ message: 'el nombre de usuario no puede estar vacío' }),
    class_validator_1.MaxLength(10, { message: 'nombre de usuario: longitud máxima de 10' }),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "nombreUsuario", void 0);
__decorate([
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "email", void 0);
__decorate([
    is_not_blank_decorator_1.IsNotBlank({ message: 'la contraseña del usuario no puede estar vacía' }),
    __metadata("design:type", String)
], CreateUsuarioDto.prototype, "password", void 0);
exports.CreateUsuarioDto = CreateUsuarioDto;
//# sourceMappingURL=create-usuario.dto.js.map