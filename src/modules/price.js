import getData from "./getData";
import renderGoods from "./renderGoods"
import { priceFilter, hotSaleFilter} from "./filter";

const price = ()=>{
    const minValPrice = document.getElementById("min");
    const maxValPrice = document.getElementById("max");
    const checkBoxInput = document.getElementById("discount-checkbox");
    const checkBoxSpan = document.querySelector(".filter-check_checkmark");

    minValPrice.addEventListener("input", ()=>{
        getData().then((data) => {
            renderGoods(priceFilter(hotSaleFilter(data, checkBoxInput.checked), minValPrice.value, maxValPrice.value))
    })
    })

    maxValPrice.addEventListener("input", ()=>{
        getData().then((data) => {
            renderGoods(priceFilter(hotSaleFilter(data, checkBoxInput.checked), minValPrice.value, maxValPrice.value))
    })
    })

    checkBoxInput.addEventListener("change", ()=>{
        if (checkBoxInput.checked){
            checkBoxSpan.classList.add("checked");
        } else {
            checkBoxSpan.classList.remove("checked");
        }
        getData().then((data) => {
            renderGoods(priceFilter(hotSaleFilter(data, checkBoxInput.checked), minValPrice.value, maxValPrice.value))
    })
    })

}


export default price;