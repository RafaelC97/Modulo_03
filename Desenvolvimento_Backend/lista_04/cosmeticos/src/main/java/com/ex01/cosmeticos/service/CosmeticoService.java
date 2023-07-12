package com.ex01.cosmeticos.service;

import com.ex01.cosmeticos.model.Cosmetico;
import com.ex01.cosmeticos.repository.BancoDeDados;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CosmeticoService {

    @Autowired
    private BancoDeDados bancoDeDados;

    public List<Cosmetico> getAll(){
        return bancoDeDados.findAll();
    }

    public Cosmetico getById(int id){
        for( Cosmetico cosmetico : bancoDeDados.findAll()){
            if (id == cosmetico.getId()){
                return cosmetico;
            }
        }
        return null;
    }

    public String save(Cosmetico cosmetico){
        return bancoDeDados.save(cosmetico);
    }

    public String delete(int id){
        return bancoDeDados.delete(id);
    }
}
