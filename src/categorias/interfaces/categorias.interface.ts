import {Document} from 'mongoose';
import {Jogador} from '../../jogadores/interfaces/jogador.interface';

export interface Categoria extends Document{
    readonly categoria: string;
    descricao: string;
    jogadores: Array<Jogador>;
}