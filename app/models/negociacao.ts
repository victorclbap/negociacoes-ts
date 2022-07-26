export class Negociacao {
  // atributos privados só podem ser alterados por metodos da propia classe
  private _data: Date;
  private _quantidade: number;
  private _valor: number;

  // no momento que cria uma instancia, vai passar esses valores
  constructor(data: Date, quantidade: number, valor: number) {
    this._data = data;
    this._quantidade = quantidade;
    this._valor = valor;
  }

  // getter nao podem ter o mesmo nome da propiedade
  get data(): Date {
    return this._data;
  }

  get quantidade(): number {
    return this._quantidade;
  }

  get valor(): number {
    return this._valor;
  }

  get volume(): number {
    return this._quantidade * this._valor;
  }
}
