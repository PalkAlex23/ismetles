import { kutyaLISTA } from "../adat.js"
import Kartya from "../Kartya.js"

//
let cim = "Mindent, amit a kutyákról tudni kell!" // globális, blokkszintű {}
const nev = "Dézi" // globális, blokkszintű {}

// nev = "Morzsa"

// var globális, függvény szintű

// írjuk ki a cím alá a cím változó
const cimELEM=$("header")
cimELEM.append(`<p>${cim}</p>`)

console.log(cimELEM)


const kutya1={
    nev: "Dézi",
    kor: 12,
    nem: "nöstény"
}

kutya1.nev="Morzsa"
console.log(kutya1)

// kutyaKiir(kutya1)

const taroloElem = $(".tartalom")

kutyaLISTA.forEach((elem)=>{
    console.log(elem)
    new Kartya(elem, taroloElem)
})