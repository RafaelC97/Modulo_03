import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  public getProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>('http://localhost:8080/listar-produtos');
  }

  public adicionarProduto(produto: Produto): Observable<string> {
    return this.http.post<string>('http://localhost:8080/adicionar-produto', produto);
  }
}
