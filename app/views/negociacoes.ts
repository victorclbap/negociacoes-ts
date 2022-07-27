import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView {
  private elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  //   metodo apenas para gerar template
  template(model: Negociacoes): string {
    return `
    <table class = "table table-hover table-bordered">
     <thead>
      <tr>
        <th>DATA</th>
        <th>QUANTIDADE</th>
        <th>VALOR</th>
      </tr>
     </thead>
     <tbody>
     ${model
       .lista()
       .map((negociacao) => {
         return ` 
        <tr>
            <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
            <td>${negociacao.quantidade}</td>
            <td>${negociacao.valor}</td>
        </tr>
        
        `;
         // a data formata de acordo com o navegador da pessoa
         // junta todos os elementos de um array em uma string e retorna esta string.
       })
       .join("")}
     </tbody>
    </table>
    `;
  }

  //   método para inserir o template no dom através do seletor
  update(model: Negociacoes): void {
    // recebe string que é convertida em elemento do dom
    const template = this.template(model);
    this.elemento.innerHTML = template;
  }
}
