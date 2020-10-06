import { Jogador } from "src/jogadores/interfaces/jogador.interface";


export class CriarCategoriaDto {
    readonly categoria: string;
    descricao: string;
    jogadores: Array<Jogador>

}