import { Component } from '@angular/core';
import Analista from './models/analista';
import Gestor from './models/gestor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public analistas: Analista[] = new Array<Analista>();
  public gestor: Gestor = new Gestor("Maria", 1, "Gestor de TI", []);

  constructor(){
    this.analistas.push(new Analista("João Silva", 2, "Analista de Desenvolvimento", this.gestor.nome));
    this.analistas.push(new Analista("Maria Santos", 3, "Analista de Qualidade de Software", this.gestor.nome));
    this.analistas.push(new Analista("Pedro Costa", 4, "Analista de Dados", this.gestor.nome));
    this.analistas.push(new Analista("Ana Oliveira", 5, "Analista de Segurança da Informação", this.gestor.nome));
    this.analistas.push(new Analista("Lucas Pereira", 6, "Analista de Sistemas", this.gestor.nome));
    this.analistas.push(new Analista("Carla Rodrigues", 7, "Analista de Testes", this.gestor.nome));
    this.analistas.push(new Analista("Gustavo Almeida", 8, "Analista de Banco de Dados", this.gestor.nome));
    this.analistas.push(new Analista("Sofia Fernandes", 9, "Analista de Business Intelligence", this.gestor.nome));
    this.analistas.push(new Analista("Rafaela Santos", 10, "Analista de Infraestrutura", this.gestor.nome));
    this.analistas.push(new Analista("Miguel Pereira", 11, "Analista de Front-end", this.gestor.nome));
    this.analistas.push(new Analista("Camila Martins", 12, "Analista de Back-end", this.gestor.nome));
    this.analistas.push(new Analista("Fernando Silva", 13, "Analista de Suporte Técnico", this.gestor.nome));

    this.gestor.nomeSubordinados = this.analistas.map(analista => analista.nome);
  }
}
