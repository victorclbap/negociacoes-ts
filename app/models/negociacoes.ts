import { Negociacao } from "./negociacao";
// guarda lista de negociacoes de forma privada
export class Negociacoes {
  // indica que é um array de negociacoes
  private negociacoes: Negociacao[] = [];
  // private negociacoes: Negociacao[] = [];

  public adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  //não permite modificacao, apenas leitura.
  public lista(): readonly Negociacao[] {
    return this.negociacoes;
  }
}
