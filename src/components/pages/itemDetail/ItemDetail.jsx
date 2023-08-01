import CounterContainer from "../../common/counter/CounterContainer"



const ItemDetail = ({product , agregarAlCarrito,cantidadEnCarrito}) => {
  return (
    <div>
      <h1>{product.title}</h1>
      <h2>{product.price}</h2>

      <CounterContainer stock={product.stock} agregarAlCarrito={agregarAlCarrito } cantidadEnCarrito={cantidadEnCarrito}/>
    </div>
  )
}

export default ItemDetail