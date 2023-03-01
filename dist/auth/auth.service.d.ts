import { TokenDto } from './dto/token.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginUsuarioDto } from './dto/login.dto';
import { RolRepository } from './../rol/rol.repository';
import { NuevoUsuarioDto } from './dto/nuevo-usuario.dto';
import { AuthRepository } from './auth.repository';
import { UsuarioEntity } from './../usuario/usuario.entity';
export declare class AuthService {
    private readonly rolRepository;
    private readonly authRepository;
    private readonly jwtService;
    constructor(rolRepository: RolRepository, authRepository: AuthRepository, jwtService: JwtService);
    getall(): Promise<UsuarioEntity[]>;
    create(dto: NuevoUsuarioDto): Promise<any>;
    login(dto: LoginUsuarioDto): Promise<any>;
    refresh(dto: TokenDto): Promise<any>;
}
