import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-adicionar-curso',
  templateUrl: './adicionar-curso.component.html',
  styleUrls: ['./adicionar-curso.component.css']
})
export class AdicionarCursoComponent{

  public nome!: string;
  public descricao!: string;
  public imagem!: string;

  constructor(private cursorService: CursoService, private router: Router) { }

  public adicionarCurso(){
    let curso = new Curso(this.nome, this.descricao, this.imagem);

    this.cursorService.adicionarCurso(curso).subscribe((response) => {
      console.log(response)
    });

    this.router.navigate(['/'])
  }

}
