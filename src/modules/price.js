const price = ()=>{
    const minValPrice = document.getElementById("min");
    const maxValPrice = document.getElementById("max");

    minValPrice.addEventListener("input", (event)=>{
        const minVal = event.target.value;
        
    })

    maxValPrice.addEventListener("input", (event)=>{
        const maxVal = event.target.value;
    })
}

export default price;