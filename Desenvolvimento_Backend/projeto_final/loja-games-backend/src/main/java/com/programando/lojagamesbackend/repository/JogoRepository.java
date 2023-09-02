package com.programando.lojagamesbackend.repository;

import com.programando.lojagamesbackend.model.Jogo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JogoRepository extends JpaRepository<Jogo, Integer> {

}
