package com.ex01.cosmeticos.model;

import java.math.BigDecimal;

public class Cosmetico {

    private int id;
    private String nome;
    private BigDecimal preco;
    private String imagemUrl;

    public Cosmetico() {
    }

    public Cosmetico(int id, String nome, BigDecimal preco, String imagemUrl) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.imagemUrl = imagemUrl;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public BigDecimal getPreco() {
        return preco;
    }

    public void setPreco(BigDecimal preco) {
        this.preco = preco;
    }

    public String getImagemUrl() {
        return imagemUrl;
    }

    public void setImagemUrl(String imagemUrl) {
        this.imagemUrl = imagemUrl;
    }
}
