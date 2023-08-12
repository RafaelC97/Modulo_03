import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-listagem-cursos',
  templateUrl: './listagem-cursos.component.html',
  styleUrls: ['./listagem-cursos.component.css']
})
export class ListagemCursosComponent implements OnInit{

  constructor(private cursoService: CursoService) { }

  public cursos!: Curso[];

  ngOnInit(): void {
    this.cursoService.getCursos().subscribe((response: Curso[]) => {
      this.cursos = response;
    })
  }

}
