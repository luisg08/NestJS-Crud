import * as mongoose from "mongoose";

export const CategoriaSchema = new mongoose.Schema({
    categoria: {type: String, unique: true},
    descricao: {type: String},
    jogadores: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Jogador"
    }]
}, {timestamps: true, collection: 'categorias'});