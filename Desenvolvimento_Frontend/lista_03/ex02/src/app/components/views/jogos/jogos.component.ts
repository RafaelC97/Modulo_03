import { Component } from '@angular/core';
import Jogo from 'src/app/module/jogo.ts/jogo.ts.module';

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent {
  public jogos: Jogo[] = new Array<Jogo>();

  constructor(){
    this.jogos.push(new Jogo("Super Mario World", 1990, "Plataforma 2D", "../../../../assets/imagens/super_mario_world_capa.jpg"))
    this.jogos.push(new Jogo("The Legend of Zelda: A Link to the Past", 1991, "RPG", "../../../../assets/imagens/zelda_a_link_to_the_past.jpg"))
    this.jogos.push(new Jogo("Donkey Kong Country 2: Diddy's Kong Quest", 1995, "Plataforma 2D", "../../../../assets/imagens/donkey_kong_country_2_capa.png"))
  }
}
