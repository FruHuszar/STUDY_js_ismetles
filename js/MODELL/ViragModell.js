import { VIRAGLISTA } from "./adatok.js";

export default class ViragModell {
    #lista=[];
    constructor(){
        this.#lista = VIRAGLISTA;
    }

    getLista(){
        return this.#lista;
    }

    rendezLista(){
        const RENDEZETTLISTA = [];
        return RENDEZETTLISTA;
    }

    szuresLista(){
        const SZURTLISTA = [];
        return SZURTLISTA;
    }
}