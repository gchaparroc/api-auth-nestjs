import { ProductoDto } from './dto/producto.dto';
import { ProductoRepository } from './producto.repository';
import { ProductoEntity } from './producto.entity';
export declare class ProductoService {
    private productoRepository;
    constructor(productoRepository: ProductoRepository);
    getAll(): Promise<ProductoEntity[]>;
    findById(id: number): Promise<ProductoEntity>;
    findByNombre(nombre: string): Promise<ProductoEntity>;
    create(dto: ProductoDto): Promise<any>;
    update(id: number, dto: ProductoDto): Promise<any>;
    delete(id: number): Promise<any>;
}
