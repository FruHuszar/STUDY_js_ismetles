import ViragModell from "../MODELL/ViragModell.js";
import Viragok from "../VIEW/Viragok.js";
import ViragTeljes from "../VIEW/ViragTeljes.js";

export default class ViragController {
    
    #viragModell={};
    #viragView={};
    constructor(){
        this.#viragModell = new ViragModell;
        this.ARTICLEELEM = document.querySelectorAll(".tarolo")[0];
        this.MODALELEM = document.querySelector(".modal");
        this.#viragView = new Viragok(this.#viragModell.getLista(),this.ARTICLEELEM);

        this.szuresGomb = document.getElementById("szures");
        this.rendezesGomb = document.getElementById("rendezes");
        this.Esemenykezelo();
    }

    Esemenykezelo(){
        this.rendezesGomb.addEventListener("click",()=>{
            this.ARTICLEELEM.innerHTML="";
            new Viragok(this.#viragModell.rendezLista(),this.ARTICLEELEM);
        });

        this.szuresGomb.addEventListener("click",()=>{
            this.ARTICLEELEM.innerHTML="";
            new Viragok(this.#viragModell.szuresLista(),this.ARTICLEELEM);
        });

        window.addEventListener("megnyit", (event)=>{
            const adat = this.#viragModell.getAdat(event.detail);
            
            if (adat) {
                this.MODALELEM.innerHTML = "";
                new ViragTeljes(adat, this.MODALELEM); 
                this.MODALELEM.style.display = 'block'; 
            }
        });
    }
}