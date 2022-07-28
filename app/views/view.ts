// herança para evitar repetição de código
// herda de view o contrutor
// abstract indica que não pode ser instanciada diretamente
// <T> indica um generics, o tipo é definido pela classe filha
export abstract class View<T> {
  // protected garante que quem herdar tem acesso a propiedade
  protected elemento: HTMLElement;
  private escapar = false;

  // escapar é parametro opicional
  constructor(seletor: string, escapar?: boolean) {
    const elemento = document.querySelector(seletor);

    if (elemento) {
      this.elemento = elemento as HTMLInputElement;
    } else {
      throw Error(`Seletor ${seletor} não existe no DOM`);
    }

    if (escapar) {
      this.escapar = escapar;
    }
  }

  public update(model: T): void {
    let template = this.template(model);
    if (this.escapar) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, "");
    }
    this.elemento.innerHTML = template;
  }

  //   metodos abstratos indicam que precisa ser implementado pelas classes filhas
  protected abstract template(model: T): string;
}
