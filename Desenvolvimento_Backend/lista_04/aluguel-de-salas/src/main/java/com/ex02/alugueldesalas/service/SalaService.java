package com.ex02.alugueldesalas.service;

import com.ex02.alugueldesalas.model.Sala;
import com.ex02.alugueldesalas.repository.BancoDeDados;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SalaService {

    @Autowired
    private BancoDeDados bancoDeDados;

    public List<Sala> getAll(){
        return bancoDeDados.findAll();
    }

    public String update(Sala sala){
        return bancoDeDados.update(sala);
    }
}
