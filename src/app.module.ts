import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JogadoresModule } from './jogadores/jogadores.module';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://luisgust08:<senhaforte123>@cluster0.pyifx.mongodb.net/<dbname>?retryWrites=true&w=majority', 
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false }),
  JogadoresModule,
  CategoriasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
