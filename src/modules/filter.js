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

export const priceyFilterMin = (goods, value)=>{
    return goods.filter((goodsItem) => {
        return goodsItem.price >= value ;
    })
}

export const priceyFilterMax = (goods, value)=>{
    return goods.filter((goodsItem) => {
        return goodsItem.price <= value ;
    })
}