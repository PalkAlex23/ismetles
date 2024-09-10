export default class Kartya {
    // adattagok
    #kutyaAdat = {} // objektum
    #szuloElem // html elem
    // konstruktor
    constructor(adat, szuloElem) {
        this.#kutyaAdat = adat;
        this.#szuloElem = szuloElem;
        this.kutyaKiir();

        // létrehozzuk a gombot
        const gombElem = $(".kiv:last")

        this.gombElem= $(".card:last-child .card-body button")
        this.gombKattint()
    }

    // tagfüggvények
    kutyaKiir() {
        this.#szuloElem.append(
            `
            <div class="card col-lg-4 col-md-6">
                <div class="card-body">
                    <h3 class="card-title">${this.#kutyaAdat.nev}</h3>
                    <p class="card-text">${this.#kutyaAdat.kor}</p>
                    <p class="card-text">${this.#kutyaAdat.nem}</p>
                    <button class="kiv btn btn-success">Kiválaszt</button>
                </div>
            </div>
            `
        )
    }

    gombKattint() {
        this.gombElem.on("click", ()=>{
            // console.log(this)
            // saját esemény létrehozása, hogy az adott objektum át tudjon adni magáról információkat
            const e = new CustomEvent("kivalaszt", {detail: this.#kutyaAdat})
            window.dispatchEvent(e)
        })
    }
}