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
        cosmeticos.add(new Cosmetico(1, "Shampoo", new BigDecimal(10), "https://images.tcdn.com.br/img/img_prod/720114/flora_vegan_shampoo_lavatorio_2_5_litro_115_1_20220411151240.jpg"));
        cosmeticos.add(new Cosmetico(2, "Sabonete", new BigDecimal(5), "https://images.tcdn.com.br/img/img_prod/679733/sabonete_vegano_de_aloe_vera_natural_artesanal_e_vegano_27_6_81e2c9044ec337cc31f1e973b9156fc6.jpg"));
        cosmeticos.add(new Cosmetico(3, "Creme para cachos", new BigDecimal(15), "https://lolacosmetics.cdn.plataformaneo.com.br/produto/20201123094454_7582992418_D.png"));
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
                String menssage = cosmetico.getNome() + " deletado com sucesso!";
                cosmeticos.remove(cosmetico);
                return menssage;
            }
        }
        return "Cosmético inexistente!";
    }
}
