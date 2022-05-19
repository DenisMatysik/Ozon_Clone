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

export const priceyFilter = (goods, value)=>{
    return goods.filter((goodsItem) => {
        return goodsItem.price ;
    })
}