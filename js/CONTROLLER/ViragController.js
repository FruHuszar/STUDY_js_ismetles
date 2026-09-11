import ViragModell from "../MODELL/ViragModell.js";
import Viragok from "../VIEW/Viragok.js";

export default class ViragController {
    
    #viragModell={};
    #viragView={};
    constructor(){
        this.#viragModell = new ViragModell;
        this.ARTICLEELEM = document.querySelectorAll(".tarolo")[0];
        this.#viragView = new Viragok(this.#viragModell.getLista(),this.ARTICLEELEM);
    }
}