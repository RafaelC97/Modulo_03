package com.steam.exercicio_02.controller;

import com.steam.exercicio_02.module.Jogo;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/jogos")

public class JogoController {
    private List<Jogo> jogos = new ArrayList<>();

    public JogoController(){
        jogos.add(new Jogo(1, "Super Mario 3D World", 250));
        jogos.add(new Jogo(2, "Zelda Breath of the Wild", 300));
        jogos.add(new Jogo(3, "Super Smash Bros Ultimate", 200));
    }

    @GetMapping
    public List<Jogo> getAll(){
        return jogos;
    }

    @GetMapping("/{id}")
    public Jogo getById(@PathVariable int id) {
        for(Jogo jogo : jogos){
            if (jogo.getId() == id){
                return jogo;
            }
        }
        return null;
    }

    @GetMapping("/menor-preco")
    public Jogo getByMenorPreco(){
        double menorPreco = Integer.MAX_VALUE;
        Jogo jogoComMenorPreco = null;
        for (Jogo jogo : jogos){
            if (jogo.getPreco() < menorPreco){
                menorPreco = jogo.getPreco();
                jogoComMenorPreco = jogo;
            }
        }
        return jogoComMenorPreco;
    }

    @PostMapping
    public String adicionaJogo(@RequestBody Jogo jogoNovo){
        for (Jogo jogo : jogos){
            if (jogoNovo.getId() == jogo.getId()){
                return "O jogo já existe";
            }
        }
        this.jogos.add(jogoNovo);
        return "Jogo adicionado com sucesso!";
    }






}
