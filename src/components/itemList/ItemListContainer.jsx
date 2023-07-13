import { products } from "../../productsMock"
import ItemList from "./ItemList"
import { useState, useEffect } from "react"

const ItemListContainer = () => {
  
const [items, setItems] = useState ([]);

useEffect(()=> {
  const work = new Promise ((resolve,reject) => {
    resolve(products)
  });

work
  .then((resp) => setItems(resp))
  .catch((error) => console.log(error))
},[]);



    return (
    <ItemList items={items} />  
      )
}

export default ItemListContainer