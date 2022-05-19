import getData from "./getData";
import renderGoods from "./renderGoods"
import { priceFilter,priceyFilterMax,priceyFilterMin } from "./filter";

const price = ()=>{
    const minValPrice = document.getElementById("min");
    const maxValPrice = document.getElementById("max");
    let priceObj = {
        minPrice: 0,
        maxPrice: 0,
    }

    minValPrice.addEventListener("input", (event)=>{
        const minVal = event.target.value;
        priceObj.minPrice = minVal;
        getData().then((data) => {
            renderGoods(priceyFilterMin(data, priceObj.minPrice))
    })
        showPriceRange();
    })

    maxValPrice.addEventListener("input", (event)=>{
        const maxVal = event.target.value;
        priceObj.maxPrice = maxVal;
        getData().then((data) => {
            renderGoods(priceyFilterMax(data, priceObj.maxPrice))
    })
        showPriceRange();
    })

    const showPriceRange=()=>{
        if(priceObj.minPrice != 0 && priceObj.maxPrice != 0){
            getData().then((data) => {
                renderGoods(priceFilter(data, priceObj.minPrice, priceObj.maxPrice))
        })
    }

    }
}


export default price;