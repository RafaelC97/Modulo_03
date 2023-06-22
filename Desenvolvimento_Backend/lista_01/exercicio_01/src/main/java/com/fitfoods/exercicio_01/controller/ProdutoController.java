package com.fitfoods.exercicio_01.controller;

import com.fitfoods.exercicio_01.model.Produto;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/produtos")

public class ProdutoController{

    private List<Produto> produtos = new ArrayList<>();

    public ProdutoController() {
        produtos.add(new Produto(1, "Pão Integral", 10.00));
        produtos.add(new Produto(2, "Cartela com 30 Ovos", 25.00));
        produtos.add(new Produto(3, "Nozes 1kg", 55.00));
    }

    @GetMapping
    public List<Produto> getAll(){
        return produtos;
    }

    @GetMapping("/{codigoDeBarras}")
    public Produto getByCodigoDeBarras(@PathVariable int codigoDeBarras){
        for(Produto produto : produtos){
            if(produto.getCodigoDeBarras() == codigoDeBarras){
                return produto;
            }
        }
        return null;
    }

    @PostMapping
    public String adicinaProduto(@RequestBody Produto produtoNovo){
        for(Produto produto : produtos){
            if(produto.getCodigoDeBarras() == produtoNovo.getCodigoDeBarras()){
                return "Produto já cadastrado";
            }
        }
        this.produtos.add(produtoNovo);
        return "O produto " + produtoNovo.getNome() + " foi cadastrado com sucesso!";
    }

}
