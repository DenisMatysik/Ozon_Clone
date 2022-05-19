import getData from "./getData";
import renderGoods from "./renderGoods"
import { priceyFilterMin,priceyFilterMax } from "./filter";

const price = ()=>{
    const minValPrice = document.getElementById("min");
    const maxValPrice = document.getElementById("max");

    minValPrice.addEventListener("input", (event)=>{
        const val = event.target.value;
        getData().then((data) => {
            renderGoods(priceyFilterMin(data, val))
    })
        
    })

    maxValPrice.addEventListener("input", (event)=>{
        const val = event.target.value;
        getData().then((data) => {
            renderGoods(priceyFilterMax(data, val))
    })
    })
}

export default price;