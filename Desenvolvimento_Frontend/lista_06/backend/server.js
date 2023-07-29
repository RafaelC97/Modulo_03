const express = require("express")
const mongoose = require("mongoose")
const app = express()
const port = 8080
const connectionString = "mongodb+srv://admin:test123@appdb.mpiec4n.mongodb.net/"
const Produto = require("./models/produto")
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.get("/listar-produtos", async (req, res) =>{
    try{
        let produtos = await Produto.find()
        return res.status(200).json(produtos)
    }catch(error){
        return res.status(500).json(error)
    }
})

app.post("/adicionar-produto", async (req, res) =>{
    let { nome, descricao, imagem, valor, categoria } = req.body
    
    let produto = {
        nome,
        descricao,
        imagem,
        valor,
        categoria
    }

    try{
        await Produto.create(produto)
        return res.status(201).json({ message: "Produto adicionado com sucesso!!"}
        )
    }catch(error){
        return res.status(500).json({ message: error.message })
    }
})

mongoose.connect(connectionString, {
    dbName: "estoqueLoja"
}).then(() => {
    console.log("MongoDB UP!")
    console.log(`http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})
