const cart = ()=>{
    const cartBtn = document.getElementById("cart");
    const cartModal = document.querySelector(".cart");
    const cartCloseBtn = cartModal.querySelector(".cart-close");
    const goodsWrapper = document.querySelector(".goods")

    const openCart = ()=>{
        cartModal.style.display = "flex";
    }

    const closeCart = ()=>{
        cartModal.style.display = "none";
    }

    cartBtn.addEventListener('click', openCart);
    cartCloseBtn.addEventListener('click', closeCart);

    goodsWrapper.addEventListener("click", (event)=>{
        if (event.target.classList.contains("btn-primary")){
            const card = event.target.closest(".card");
            const key = card.dataset.key;
            const goods = JSON.parse(localStorage.getItem("goods"))
            const cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
            const goodItem = goods.find((item) => {
                return item.id === +key
            })
            cart.push(goodItem)
            localStorage.setItem("cart", JSON.stringify(cart))
        }
    })
}
export default cart