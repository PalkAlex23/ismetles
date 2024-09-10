import Kartyak from "./view/Kartyak.js";
import { kutyaLISTA } from "./model/adat.js";
import Kartya from "./view/Kartya.js";

const kivKutyaLista = []

const taroloElem = $(".tartalom")
const kivElem = $(".kivalasztott")

new Kartyak(kutyaLISTA, taroloElem)

$(window).on("kivalaszt", (event)=>{
    console.log(event.detail)
    kivKutyaLista.push(event.detail)
    console.log(kivKutyaLista)
    new Kartya(event.detail, kivElem)
})