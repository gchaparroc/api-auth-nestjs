import { CreateRolDto } from './dto/create-rol.dto';
import { RolService } from './rol.service';
export declare class RolController {
    private readonly rolService;
    constructor(rolService: RolService);
    getAll(): Promise<import("./rol.entity").RolEntity[]>;
    create(dto: CreateRolDto): Promise<any>;
}
