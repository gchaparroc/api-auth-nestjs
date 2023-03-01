import { RolRepository } from './../rol/rol.repository';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UsuarioRepository } from './usuario.repository';
import { UsuarioEntity } from './usuario.entity';
export declare class UsuarioService {
    private readonly rolRepository;
    private readonly usuarioRepository;
    constructor(rolRepository: RolRepository, usuarioRepository: UsuarioRepository);
    getall(): Promise<UsuarioEntity[]>;
    create(dto: CreateUsuarioDto): Promise<any>;
}
