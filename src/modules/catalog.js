import getData from "./getData";
import renderGoods from "./renderGoods"
import {categoryFilter, allFilter} from "./filter"

const catalog =()=>{
    const btnCatalog = document.querySelector(".catalog-button > button");
    const catalogModal = document.querySelector(".catalog");
    const catalogModalItems = document.querySelectorAll(".catalog li");
    let isOpen = false;
    btnCatalog.addEventListener("click", ()=>{
        isOpen = !isOpen;
        isOpen ? catalogModal.style.display = "block" : catalogModal.style.display = ""; 
    })

    catalogModalItems.forEach((item)=>{
        item.addEventListener("click", ()=>{
            const text = item.textContent;
            if(text === "Все товары"){
                getData().then((data) => {
                    renderGoods(allFilter(data))
            })
            } else {
                getData().then((data) => {
                renderGoods(categoryFilter(data, text))
            })
            }
        })
    })
}

export default catalog;