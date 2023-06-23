import ItemList from "./ItemList"


const ItemListContainer = () => {
  let saludo = "Hola bienvenidos a la tienda oficial de boxeo BALBOA STORE"
    return (
    <ItemList greeting={saludo}/>
  )
}

export default ItemListContainer