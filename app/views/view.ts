// herança para evitar repetição de código
// herda de view o contrutor
// abstract indica que não pode ser instanciada diretamente
// <T> indica um generics, o tipo é definido pela classe filha
export abstract class View<T> {
  // protected garante que quem herdar tem acesso a propiedade
  protected elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor);
  }

  update(model: T): void {
    const template = this.template(model);
    this.elemento.innerHTML = template;
  }

  //   metodos abstratos indicam que precisa ser implementado pelas classes filhas
  abstract template(model: T): string;
}
