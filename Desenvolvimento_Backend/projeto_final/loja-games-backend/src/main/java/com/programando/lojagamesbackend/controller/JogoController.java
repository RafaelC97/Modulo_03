package com.programando.lojagamesbackend.controller;

import com.programando.lojagamesbackend.model.Jogo;
import com.programando.lojagamesbackend.service.JogoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/jogos")
@CrossOrigin("*")
public class JogoController {

    @Autowired
    private JogoService jogoService;

    @GetMapping
    public ResponseEntity<List<Jogo>> getAll(){
        return ResponseEntity.status(HttpStatus.OK).body(jogoService.getAll());
    }

    @PostMapping
    public ResponseEntity<Jogo> save(@RequestBody Jogo jogoRecebido){
        return ResponseEntity.status(HttpStatus.CREATED).body(jogoService.save(jogoRecebido));
    }

}
