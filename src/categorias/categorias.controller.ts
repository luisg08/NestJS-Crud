import { Controller, Post, Body, Get, Query, Delete } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CriarCategoriaDto } from './dtos/criar-categorias.dto';

@Controller('api/v1/categorias')
export class CategoriasController {

    constructor(private readonly categoriasService: CategoriasService){}

    @Post()
    async criarCategoria{
        @Body() CriarCategoriaDto: CriarCategoriaDto): Promise<Categoria> {
            return await this.categoriasService.criarCategoria(CriarCategoriaDto)
        }
    @Get()
    async consultarCategorias(): Promise<Array<Categoria>> {
        return await this.categoriasService.consultarTodasCategorias()
    }
}