// herança para evitar repetição de código
// herda de view o contrutor
// abstract indica que não pode ser instanciada diretamente
// <T> indica um generics, o tipo é definido pela classe filha
export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
