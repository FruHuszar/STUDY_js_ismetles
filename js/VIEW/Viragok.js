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
        this.#lista.forEach((elem,i)=>{
            new Virag(this.#lista[i], this.#szuloElem);
        })
    }
}