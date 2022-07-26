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
}
