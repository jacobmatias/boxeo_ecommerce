
import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import {getDocs,collection,query,where} from "firebase/firestore"
//import { products } from "../../../productsMock";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const {categoryId} = useParams();

  

  useEffect(() => {
  
    let consulta;

    let products_collection= collection(db,"products")

    if(!categoryId){
      consulta =products_collection
    }else{
      consulta = query(products_collection,where("category","==",categoryId) )
    }
    
    getDocs(consulta) //devuelve una promesa
    //.then( res =>console.log ({...res.docs[0].data(), id: res.docs[0].id})) ,por cada documento creame un objeto que traiga todos los datos y sumale el id
    .then((res) =>{
      let arrayProducts= res.docs.map( (product) => {
        return {...product.data(), id: product.id};
      });
      setItems(arrayProducts)
    });

  }, [categoryId]);
  


  return (<>
  {
    // Esto se ejecutaria siempre con el ternario: <h1>Aca van los productos...</h1> 
    <ItemList items={items} />
  }
  </>
  )
};

export default ItemListContainer;



  //TODO LO SIGUIENTE ES CON EL PRODUCTOS MOCK, SIN HABER TRABAJADO EN FIREBASE, UTILIZANDO EL USE EFFECT
  //   let productosFiltrados = products.filter(elemento => elemento.category === categoryId)
  //   const work = new Promise((resolve, reject) => {
  //     setTimeout(()=> {
  //     resolve(categoryId ? productosFiltrados : products);
  //   },2000);
  // });
  //   work.then((resp) => setItems(resp)).catch((error) => console.log(error));

  // if(items.length===0){
  //   return <h1>Cargando...</h1>
  // }
  // return <ItemList items={items} />;