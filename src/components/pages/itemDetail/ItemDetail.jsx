import CounterContainer from "../../common/counter/CounterContainer"
import CartContainer from "../cart/CartContainer"


const ItemDetail = ({product , agregarAlCarrito}) => {
  return (
    <div>
      <h1>{product.title}</h1>
      <h2>{product.price}</h2>

      <CounterContainer stock={product.stock} agregarAlCarrito={agregarAlCarrito } />
    </div>
  )
}

export default ItemDetail