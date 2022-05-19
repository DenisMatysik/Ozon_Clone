import getData from "./getData";
import renderGoods from "./renderGoods"
import { searchFilter } from "./filter";

const search = ()=>{
    const searchInput = document.querySelector(".search-wrapper_input")

    searchInput.addEventListener("input", (event)=>{
        const inputVal = event.target.value;
        
        getData().then((data) => {
            renderGoods(searchFilter(data, inputVal))
    })
    })
}

export default search