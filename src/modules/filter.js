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

export const priceFilter = (goods, valueMin = 0, valueMax = 0)=>{
    return goods.filter((goodsItem)=>{
        if (valueMin==="" && valueMax===""){
            return goodsItem
        } else if(valueMin !=="" && valueMax !==""){
            return goodsItem.price > +valueMin && goodsItem.price < +valueMax
        } else if (valueMin !=="" && valueMax ===""){
            return goodsItem.price > +valueMin
        } else if (valueMin ==="" && valueMax !==""){
            return goodsItem.price < +valueMax
        }
    })
}