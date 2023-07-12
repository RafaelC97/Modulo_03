package com.ex02.alugueldesalas.controller;

import com.ex02.alugueldesalas.model.Sala;
import com.ex02.alugueldesalas.service.SalaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/salas")
public class SalaController {

    @Autowired
    private SalaService salaService;

    @GetMapping
    public List<Sala> getAll(){
        return salaService.getAll();
    }

    @PutMapping
    public String update(@RequestBody Sala sala){
        return salaService.update(sala);
    }
}
