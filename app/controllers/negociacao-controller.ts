import { Negociacoes } from "./../models/negociacoes.js";
import { Negociacao } from "./../models/negociacao.js";
import { NegociacoesView } from "../views/negociacoes.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView("#negociacoesView");

  constructor() {
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
    this.negociacoesView.update(this.negociacoes);
  }

  adiciona(): void {
    const negociacao = this.criaNegociacao();
    this.negociacoes.adiciona(negociacao);
    console.log(this.negociacoes.lista());
    // quando adiciona uma negociacao no Array, faz update
    this.negociacoesView.update(this.negociacoes);
    this.limparFormulario();
  }

  criaNegociacao(): Negociacao {
    // para criar a data que queremos passa string no formato new Date('1111,11,11')
    // mas ela vem no formato no value ('1111-11-11')
    // encontra tudo o que é hífen
    const exp = /-/g;
    const data = new Date(this.inputData.value.replace(exp, ","));

    const quantidade = parseInt(this.inputQuantidade.value);
    const valor = parseFloat(this.inputValor.value);

    return new Negociacao(
      data,
      quantidade,
      valor

      // todo input.value o retorno é uma string que precisa ser tratado
      //   this.inputData.value,
      //   this.inputQuantidade.value,
      //   this.inputValor.value
    );
  }

  limparFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";

    this.inputData.focus();
  }
}
