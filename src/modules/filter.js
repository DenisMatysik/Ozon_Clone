export const searchFilter = (goods, value)=>{
    return goods.filter((goodsItem) => {
        return goodsItem.title.toLowerCase().includes(value.toLowerCase())
    })
}

export const categoryFilter = (goods, value)=>{
    return goods.filter((goodsItem) => {
        return goodsItem.category === value;
    })
}

export const priceFilter = (goods, valueMin, valueMax)=>{
    return goods.filter((items)=>{
        if (valueMin==="" && valueMax===""){
            return items
        } else if(valueMin !=="" && valueMax !==""){
            return items.price > +valueMin && items.price < +valueMax
        } else if (valueMin !=="" && valueMax ===""){
            return items.price > +valueMin
        } else if (valueMin ==="" && valueMax !==""){
            return items.price < +valueMax
        }
    })
}

export const hotSaleFilter = (goods, value)=>{
    return goods.filter((items) => {
            if (value){
                return items.sale === true
            } else {
                return items
            }
        })
}