import { products } from "../../../productsMock";
import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});

  let {id} = useParams();

  useEffect(() => {
    let promise = new Promise((resolve, reject) => {
      let productsSelected = products.find((product) => product.id === +id);
      resolve(productsSelected);
    });
    promise.then((res) => setProduct(res)).catch((err) => console.log(err));
  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };

    console.log(data);
  };
  return (
    
      <ItemDetail product={product} agregarAlCarrito={agregarAlCarrito} />
   
  );
};

export default ItemDetailContainer;
