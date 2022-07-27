export class Negociacao {
    // atributos privados só podem ser alterados por metodos da propia classe
    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;
    // no momento que cria uma instancia, os valores sao atribuidos automaticamente ao atributo private
    constructor(_data, _quantidade, _valor) {
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
    }
    // getter nao podem ter o mesmo nome da propiedade
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
    // metodo estatico pode chamar diretamente da classe, sem precisar instancia
    static criaDe(dataString, quantidadeString, valorString) {
        // para criar a data que queremos passa string no formato new Date('1111,11,11')
        // mas ela vem no formato no value ('1111-11-11')
        // encontra tudo o que é hífen
        const exp = /-/g;
        const data = new Date(dataString.replace(exp, ","));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(data, quantidade, valor);
        // todo input.value o retorno é uma string que precisa ser tratado
        //   this.inputData.value,
        //   this.inputQuantidade.value,
        //   this.inputValor.value
    }
}
