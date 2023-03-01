import { CreateRolDto } from './dto/create-rol.dto';
import { RolEntity } from './rol.entity';
import { RolRepository } from './rol.repository';
export declare class RolService {
    private readonly rolRepository;
    constructor(rolRepository: RolRepository);
    getall(): Promise<RolEntity[]>;
    create(dto: CreateRolDto): Promise<any>;
}
