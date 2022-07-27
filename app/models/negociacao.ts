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

  // metodo estatico pode chamar diretamente da classe, sem precisar instancia
  public static criaDe(
    dataString: string,
    quantidadeString: string,
    valorString: string
  ): Negociacao {
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
