export default class ViragTeljes {

    #obj = {}
    #szuloelem=""

    constructor(obj, szuloelem){
        this.#obj = obj;
        this.#szuloelem = szuloelem;
        this.megjelenit();
        this.esemenykezelo();
    } 

    megjelenit(){
        const SZOVEG=`
        <div class="modal-tartalom">
            <span class="close-btn">&times;</span>
            <h2>${this.#obj.nev}</h2>
            <p><strong>Faj:</strong> <span>${this.#obj.faj}</span></p>
            <p><strong>Virágzás:</strong> <span>${this.#obj.viragzas}</span></p>
            <p><strong>Leírás:</strong> <span>${this.#obj.leiras || "Nincs leírás"}</span></p>
            <p><strong>Most virágzik?</strong> <span>${this.#obj.mostViragzikE ? "Igen" : "Nem"}</span></p>
            <button class="kosar">Kosárba</button>
        </div>
        `;

        this.#szuloelem.insertAdjacentHTML("beforeend", SZOVEG);
    }

    esemenykezelo(){
        const closeBtn = this.#szuloelem.querySelector(".close-btn");
        closeBtn.addEventListener("click", () => {
            this.#szuloelem.style.display = 'none';
        });

        const kosarGomb = this.#szuloelem.querySelector(".kosar");
        kosarGomb.addEventListener("click", () => {
            const e = new CustomEvent("kosarba",{detail:this.#obj.id});
            window.dispatchEvent(e);
        });
    }
}