import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CriarCategoriaDto } from './dtos/criar-categorias.dto';
import { Categoria } from './interfaces/categorias.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BadRequestException } from '@nestjs/common/exceptions/bad-request.exception';

@Injectable()
export class CategoriasService {

    constructor(@InjectModel('Categoria')
        private readonly categoriaModel: Model<Categoria>) {}

    async criarCategoria(criaCategoriaDto: CriarCategoriaDto): Promise<Categoria> {
        const { categoria } = CriarCategoriaDto
        const categoriaEncontrada = await this.categoriaModel.findOne({categoria}).exec();
        if (categoriaEncontrada) {
            throw new BadRequestException(`Categoria ${categoria} já cadastrada!`)
        }

        const categoriaCriada = new this.categoriaModel(CriarCategoriaDto)
        return await categoriaCriada.save()
    }

    async consultarCategorias(): Promise<Categoria[]> {
        return await this.categoriaModel.find().exec();
      }
}