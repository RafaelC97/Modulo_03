import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { }

  public getCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>('http://localhost:8080/listar-cursos');
  }

  public adicionarCurso(curso: Curso): Observable<string> {
    return this.http.post<string>('http://localhost:8080/adicionar-curso', curso);
  }
}
