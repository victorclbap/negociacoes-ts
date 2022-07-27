import { Negociacoes } from "./../models/negociacoes.js";
import { Negociacao } from "./../models/negociacao.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { MensagemView } from "../views/mensagem-view.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";

export class NegociacaoController {
  private inputData: HTMLInputElement;
  private inputQuantidade: HTMLInputElement;
  private inputValor: HTMLInputElement;
  private negociacoes = new Negociacoes();
  private negociacoesView = new NegociacoesView("#negociacoesView");
  private mensagemView = new MensagemView("#mensagemView");


  constructor() {
    this.inputData = document.querySelector("#data");
    this.inputQuantidade = document.querySelector("#quantidade");
    this.inputValor = document.querySelector("#valor");
    this.negociacoesView.update(this.negociacoes);
  }

  public adiciona(): void {
    const negociacao = this.criaNegociacao();
    // dia util, 0 = domingo, 6 = sabado

    if (!this.eDiaUtil(negociacao.data)) {
      this.mensagemView.update("Apenas negociações em dias úteis são aceitas");
      return;
    }
    this.negociacoes.adiciona(negociacao);
    this.atualizaView();
    this.limparFormulario();
  }

  private criaNegociacao(): Negociacao {
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

  private limparFormulario(): void {
    this.inputData.value = "";
    this.inputQuantidade.value = "";
    this.inputValor.value = "";

    this.inputData.focus();
  }

  private atualizaView(): void {
    // quando adiciona uma negociacao no Array, faz update
    this.negociacoesView.update(this.negociacoes);
    this.mensagemView.update("Negociação adicionada com sucesso!");
  }

  private eDiaUtil(data: Date) {
    return data.getDay() > DiasDaSemana.DOMINGO && DiasDaSemana.SABADO;
  }
}
