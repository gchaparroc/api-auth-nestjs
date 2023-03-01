import { RolEntity } from './../rol/rol.entity';
export declare class UsuarioEntity {
    id: number;
    nombre: string;
    nombreUsuario: string;
    email: string;
    password: string;
    roles: RolEntity[];
    hashPasword(): Promise<void>;
}
