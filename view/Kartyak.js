import Kartya from "./Kartya.js"

export default class Kartyak {

    #lista = []
    #szuloElem

    constructor(lista, szuloElem) {
        this.#lista= lista
        this.#szuloElem = szuloElem
        this.kartyakKiir();
    }

    kartyakKiir() {
        this.#lista.forEach((elem)=>{
            new Kartya(elem, this.#szuloElem)
        })
    }
}