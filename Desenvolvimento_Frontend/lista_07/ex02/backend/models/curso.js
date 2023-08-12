const mongoose = require('mongoose')

const produtoSchema = mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    imagem: { type: String, required: true },
})

const cursos = mongoose.model('Cursos', produtoSchema)

module.exports = cursos
