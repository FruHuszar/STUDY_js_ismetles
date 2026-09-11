export default class Virag {

    #obj = {}
    #szuloelem=""

    constructor(obj, szuloelem){
        this.#obj = obj;
        this.#szuloelem = szuloelem;
        this.megjelenit();
        this.gombElem=document.querySelector(".virag:last-child button");
        this.esemenykezelo();
    }

    megjelenit(){
        const SZOVEG=`
        <div class="virag">
            <h2>${this.#obj.nev}</h2>
            <p><span>${this.#obj.faj}</span></p>
            <p><span>${this.#obj.viragzas}</span></p>
            <button class="open">Megnyit</button>
        </div>
        `;

        this.#szuloelem.insertAdjacentHTML("beforeend", SZOVEG);
    }

    esemenykezelo(){
        this.gombElem.addEventListener("click",()=>{
            const esemeny = new CustomEvent("megnyit",{detail:this.#obj.id});
            window.dispatchEvent(esemeny);
        });
    }
}