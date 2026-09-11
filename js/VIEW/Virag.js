export default class Virag {
    #obj = {};
    #szuloElem = "";

    constructor(obj, szuloElem) {
        this.#obj = obj;
        this.#szuloElem = szuloElem;
        this.megjelenit();
        this.esemenykezelo();
    }

    megjelenit() {
        const SZOVEG = `
            <div class="kartyat-tartalom">
                <h3>${this.#obj.nev}</h3>
                <p>${this.#obj.faj}</p>
                <!-- A megnyitás gomb gombosztálya/azonosítója -->
                <button class="megnyit-btn">Megnyitás</button>
            </div>
        `;
        this.#szuloElem.insertAdjacentHTML("beforeend", SZOVEG);
    }

    esemenykezelo() {
        const megnyitGomb = this.#szuloElem.querySelector(".kartyat-tartalom:last-child .megnyit-btn");

        if (megnyitGomb) {
            megnyitGomb.addEventListener("click", () => {
                const e = new CustomEvent("megnyit", { detail: this.#obj.id });
                window.dispatchEvent(e);
            });
        }
    }
}