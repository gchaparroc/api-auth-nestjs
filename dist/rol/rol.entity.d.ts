import { UsuarioEntity } from './../usuario/usuario.entity';
import { RolNombre } from './rol.enum';
export declare class RolEntity {
    id: number;
    rolNombre: RolNombre;
    usuarios: UsuarioEntity[];
}
