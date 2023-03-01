import { TokenDto } from './dto/token.dto';
import { LoginUsuarioDto } from './dto/login.dto';
import { NuevoUsuarioDto } from './dto/nuevo-usuario.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    getAll(): Promise<import("../usuario/usuario.entity").UsuarioEntity[]>;
    create(dto: NuevoUsuarioDto): Promise<any>;
    login(dto: LoginUsuarioDto): Promise<any>;
    refresh(dto: TokenDto): Promise<any>;
}
