import { VIRAGLISTA } from "./adatok.js";

export default class ViragModell {
    #lista=[];
    #kosarlista=[];
    constructor(){
        this.#lista = VIRAGLISTA;
    }

    getLista(){
        return this.#lista;
    }

    getKosarlista(){
        return this.#kosarlista;
    }

    kosarba(obj){
        this.#kosarlista.push(obj);
    }

    rendezLista(){
        return this.#lista.sort((a,b)=>{
            return a.nev > b.nev ? 1 : -1;
        });
    }

    szuresLista(){
        const SZURTLISTA = this.#lista.filter((a)=>{
            return a.mostViragzikE == true;
        });

        return SZURTLISTA;
    }

    getAdat(id){
        return this.#lista.find((a)=>{
            return a.id == id;
        })
    }
}