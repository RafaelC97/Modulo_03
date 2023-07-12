package com.ex01.cosmeticos.repository;

import com.ex01.cosmeticos.model.Cosmetico;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Component
public class BancoDeDados {

    List<Cosmetico> cosmeticos = new ArrayList<>();

    public BancoDeDados() {
        cosmeticos.add(new Cosmetico(1, "Shampoo", new BigDecimal(10)));
        cosmeticos.add(new Cosmetico(2, "Sabonete", new BigDecimal(5)));
        cosmeticos.add(new Cosmetico(3, "Creme para cabelo cacheado", new BigDecimal(15)));
    }

    public List<Cosmetico> findAll(){
        return cosmeticos;
    }

    public String save(Cosmetico novoCosmetico){
        for(Cosmetico cosmetico : cosmeticos){
            if (novoCosmetico.getId() == cosmetico.getId()){
                return "Impossível cadastrar! cosmético já consta no banco!";
            }
        }
        cosmeticos.add(novoCosmetico);
        return "Cosmético " + novoCosmetico.getNome() + " cadastrado com sucesso!";
    }

    public String delete(int id){
        for(Cosmetico cosmetico : cosmeticos){
            if(id == cosmetico.getId()){
                cosmeticos.remove(cosmetico);
                return "Cosmético deletado com sucesso!";
            }
        }
        return "Cosmético inexistente!";
    }
}
