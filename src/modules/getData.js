const getData = ()=>{
   return fetch('https://test-69b11-default-rtdb.firebaseio.com/goods.json')
  .then( res => res.json())
}

export default getData