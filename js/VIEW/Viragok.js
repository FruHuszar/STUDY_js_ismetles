import Virag from "./Virag.js";

export default class Viragok {
    #lista=[];
    #szuloElem="";
    constructor(lista, szuloElem) {
        this.#lista = lista;
        this.#szuloElem = szuloElem;
        this.megjelenit();
    }

    megjelenit(){
        this.#szuloElem.innerHTML = "";
        this.#lista.forEach((elem,i)=>{
            new Virag(elem, this.#szuloElem);
        })
    }
}