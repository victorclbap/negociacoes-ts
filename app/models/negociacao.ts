export class Negociacao {
  // atributos privados só podem ser alterados por metodos da propia classe

  // private _data: Date;
  // private _quantidade: number;
  // private _valor: number;


  // no momento que cria uma instancia, os valores sao atribuidos automaticamente ao atributo private
  constructor(
    private _data: Date,
    private _quantidade: number,
    private _valor: number
  ) {}

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
