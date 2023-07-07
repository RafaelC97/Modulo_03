export default class Jogo{
  nome: string;
  anoLancamento: number;
  genero: string;
  img: string;

  constructor( nome: string, anoLancamento: number, genero: string, img: string){
    this.nome = nome;
    this.anoLancamento = anoLancamento;
    this.genero = genero;
    this.img = img;
  }
}
