
import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"


const CartContainer = () => {
  
  const {cart, clearCart,deleteById } = useContext(CartContext);
  
  return (
    <div>
    <h1>Estoy en el Carrito</h1>
    
    {cart.map((elemento) => {
      return (
      <div key={elemento.id}>
        <h3>{elemento.title}</h3>
        <h3>{elemento.price}</h3>
        <h3>Cantidad : {elemento.quantity}</h3>
        <button onClick={()=>deleteById(elemento.id)}>Eliminar</button>
      </div>
      );
    })}

    <button onClick={clearCart}>Limpiar Carrito</button>
   </div>
)
}

export default CartContainer