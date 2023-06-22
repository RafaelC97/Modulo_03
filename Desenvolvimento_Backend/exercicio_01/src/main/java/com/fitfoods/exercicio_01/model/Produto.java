package com.fitfoods.exercicio_01.model;

public class Produto{
    private int codigoDeBarras;
    private String nome;
    private double preco;

    public Produto(){
    }

    public Produto(int codigoDeBarras, String nome, double preco){
        this.codigoDeBarras = codigoDeBarras;
        this.nome = nome;
        this.preco = preco;
    }

    public int getCodigoDeBarras(){
        return this.codigoDeBarras;
    }

    public String getNome(){
        return this.nome;
    }

    public double getPreco(){
        return this.preco;
    }

    public void setCodigoDeBarras(int codigoDeBarras){
        this.codigoDeBarras = codigoDeBarras;
    }

    public void setNome(String nome){
        this.nome = nome;
    }

    public void setPreco(double preco){
        this.preco = preco;
    }
}
