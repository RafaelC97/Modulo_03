package com.ex02.alugueldesalas.repository;

import com.ex02.alugueldesalas.model.Sala;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class BancoDeDados {

    private List<Sala> salas = new ArrayList<>();

    public BancoDeDados() {
        salas.add(new Sala(1, false, null));
        salas.add(new Sala(2, false, null));
        salas.add(new Sala(3, false, null));
        salas.add(new Sala(4, false, null));
        salas.add(new Sala(5, false, null));
        salas.add(new Sala(6, false, null));
        salas.add(new Sala(7, false, null));
        salas.add(new Sala(8, false, null));
    }

    public List<Sala> findAll() {
        return salas;
    }

    public String update(Sala sala) {
        if (!sala.getEstaAlugada() || sala.getNomeLocatario() == null || sala.getNomeLocatario().equals("")) {
            return "Digite uma infomação valida, o nome ou a soliciatação de aluguel podem ser invalidos";
        }
        for (Sala salaNoBanco : salas) {
            if (salaNoBanco.getId() == sala.getId() && !salaNoBanco.getEstaAlugada()) {
                salaNoBanco.setEstaAlugada(sala.getEstaAlugada());
                salaNoBanco.setNomeLocatario(sala.getNomeLocatario());
                return "Sala " + salaNoBanco.getId() + " alugada com sucesso!";
            }
        }
        return "Sala já alugada";
    }
}
