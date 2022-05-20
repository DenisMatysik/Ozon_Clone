import getData from "./getData";
import renderGoods from "./renderGoods"
import { priceFilter} from "./filter";

const price = ()=>{
    const minValPrice = document.getElementById("min");
    const maxValPrice = document.getElementById("max");

    minValPrice.addEventListener("input", ()=>{
        getData().then((data) => {
            renderGoods(priceFilter(data, minValPrice.value, maxValPrice.value))
    })
    })

    maxValPrice.addEventListener("input", ()=>{
        getData().then((data) => {
            renderGoods(priceFilter(data, minValPrice.value, maxValPrice.value))
    })
    })

}


export default price;