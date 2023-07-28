export class Cosmetico{
  public id: number;
  public nome: string;
  public preco: number;
  public imagemUrl: string;

  constructor (id: number, nome: string, preco: number, imagemUrl: string) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
    this.imagemUrl = imagemUrl;
  }
}
