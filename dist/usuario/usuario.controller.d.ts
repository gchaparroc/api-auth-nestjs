import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UsuarioService } from './usuario.service';
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    getAll(): Promise<import("./usuario.entity").UsuarioEntity[]>;
    create(dto: CreateUsuarioDto): Promise<any>;
}
