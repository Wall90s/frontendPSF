export class Animal {
  _id!: string;
  nome: string;
  raca: string;
  peso: number;

  constructor(nome: string,raca: string, peso: number) {
    this.nome = nome;
    this.raca = raca;
    this.peso = peso
  }
}
