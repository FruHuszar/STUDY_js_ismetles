export default class Virag {

    #obj = {}
    #szuloelem=""

    constructor(obj, szuloelem){
        this.#obj = obj;
        this.#szuloelem = szuloelem;
        this.megjelenit();
    }

    megjelenit(){
        const SZOVEG=`
        <div>
            <h2>${this.#obj.nev}</h2>
            <p><span>${this.#obj.faj}</span></p>
            <p><span>${this.#obj.viragzas}</span></p>
        </div>
        `;

        this.#szuloelem.insertAdjacentHTML("beforeend", SZOVEG);
    }
}