const getData = (str)=>{
   return fetch(
     `https://test-69b11-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}`: ""}`)
  .then( res => res.json())
}

export default getData