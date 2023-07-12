package com.ex01.cosmeticos.controller;

import com.ex01.cosmeticos.model.Cosmetico;
import com.ex01.cosmeticos.service.CosmeticoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cosmeticos")
public class CosmeticoController {

    @Autowired
    private CosmeticoService cosmeticoService;

    @GetMapping
    public List<Cosmetico> getAll(){
        return cosmeticoService.getAll();
    }

    @GetMapping("/{id}")
    public Cosmetico getById(@PathVariable int id){
        return cosmeticoService.getById(id);
    }

    @PostMapping
    public String save(@RequestBody Cosmetico cosmetico){
        return cosmeticoService.save(cosmetico);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id){
        return cosmeticoService.delete(id);
    }
}
