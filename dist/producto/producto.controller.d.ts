import { ProductoService } from './producto.service';
import { ProductoDto } from './dto/producto.dto';
export declare class ProductoController {
    private readonly productoService;
    constructor(productoService: ProductoService);
    getAll(): Promise<import("./producto.entity").ProductoEntity[]>;
    getOne(id: number): Promise<import("./producto.entity").ProductoEntity>;
    create(dto: ProductoDto): Promise<any>;
    update(id: number, dto: ProductoDto): Promise<any>;
    delete(id: number): Promise<any>;
}
