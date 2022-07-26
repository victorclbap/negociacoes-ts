// guarda lista de negociacoes de forma privada
export class Negociacoes {
    constructor() {
        // indica que é um array de negociacoes
        this.negociacoes = [];
    }
    // private negociacoes: Negociacao[] = [];
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //não permite modificacao, apenas leitura.
    lista() {
        return this.negociacoes;
    }
}
