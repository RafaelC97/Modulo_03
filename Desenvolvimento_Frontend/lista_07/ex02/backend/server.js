const express = require("express")
const mongoose = require("mongoose")
const app = express()
const port = 8080
const connectionString = "mongodb+srv://admin:test123@appdb.mpiec4n.mongodb.net/"
const Curso = require("./models/curso")
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.get("/listar-cursos", async (req, res) =>{
    try{
        let cursos = await Curso.find()
        return res.status(200).json(cursos)
    }catch(error){
        return res.status(500).json(error)
    }
})

app.post("/adicionar-curso", async (req, res) =>{
    let { nome, descricao, imagem } = req.body
    
    let curso = {
        nome,
        descricao,
        imagem,
    }

    try{
        await Curso.create(curso)
        return res.status(201).json({ message: "Curso adicionado com sucesso!!"}
        )
    }catch(error){
        return res.status(500).json({ message: error.message })
    }
})

mongoose.connect(connectionString, {
    dbName: "cursos"
}).then(() => {
    console.log("MongoDB UP!")
    console.log(`http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})