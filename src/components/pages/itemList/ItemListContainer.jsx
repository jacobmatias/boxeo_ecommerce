
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../productsMock";


const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const {categoryId} = useParams();

  

  useEffect(() => {
    let productosFiltrados = products.filter(elemento => elemento.category === categoryId)
    const work = new Promise((resolve, reject) => {
      resolve(categoryId ? productosFiltrados : products);
    });

    work.then((resp) => setItems(resp)).catch((error) => console.log(error));
  }, [categoryId]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
