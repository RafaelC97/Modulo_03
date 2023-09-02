package com.programando.lojagamesbackend.service;

import com.programando.lojagamesbackend.model.Jogo;
import com.programando.lojagamesbackend.repository.JogoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.SpringVersion;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JogoService {

    @Autowired
    private JogoRepository jogoRepository;

    public List<Jogo> getAll(){
        return jogoRepository.findAll();
    }

    public Jogo save(Jogo jogo){
        return jogoRepository.save(jogo);
    }
}
