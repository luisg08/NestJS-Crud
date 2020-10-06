import { Module } from '@nestjs/common';
import { JogadoresController } from './jogadores.controller';
import { JogadoresService } from './jogadores.service';
import { MongooseModule } from '@nestjs/mongoose'
import { JogadorSchema } from './interfaces/jogadorSchema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Jogador', schema: JogadorSchema}]) ],
  controllers: [JogadoresController],
  providers: [JogadoresService]
})
export class JogadoresModule {}