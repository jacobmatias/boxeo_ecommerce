
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../productsMock";
import { PacmanLoader } from "react-spinners";



const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const {categoryId} = useParams();

  

  useEffect(() => {
    let productosFiltrados = products.filter(elemento => elemento.category === categoryId)
    const work = new Promise((resolve, reject) => {
      setTimeout(()=> {
      resolve(categoryId ? productosFiltrados : products);
    },2000);
  });
    work.then((resp) => setItems(resp)).catch((error) => console.log(error));
  }, [categoryId]);

  // if(items.length===0){
  //   return <h1>Cargando...</h1>
  // }
  // return <ItemList items={items} />;

  return (<>
  {
    // Esto se ejecutaria siempre con el ternario: <h1>Aca van los productos...</h1> 
    items.length===0 ? <PacmanLoader color="#d6365c" cssOverride={{marginLeft:"600px"}} /> : <ItemList items={items} />
  },
  </>
  )
};

export default ItemListContainer;
