import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";

const CartContainer = () => {
  const { cart, clearCart, deleteById, totalPrice } = useContext(CartContext);

  let cleanCart = ()=>{Swal.fire({
    title: '¿Estas seguro que quieres eliminar el carrito?',
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: 'Si , estoy seguro',
    denyButtonText: `No,quiero seguir comprando`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      clearCart()
      Swal.fire('Carrito eliminado!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Carrito sigue vigente', '', 'info')
    }
  })}

  let total = totalPrice();
  return(
  cart.length > 0 ? (
    <div>
      <h1>Estoy en el Carrito</h1>
      {cart.map((elemento) => {
        return (
          <div key={elemento.id}>
            <h3>{elemento.title}</h3>
            <h3>{elemento.price}</h3>
            <h3>Cantidad : {elemento.quantity}</h3>
            <button onClick={() => deleteById(elemento.id)}>Eliminar</button>
          </div>
        );
      })}
      {/* si el tamaño del carrito es mayor a cero mostramos el boton , sino ese
      bloque no se ejecuta //cart.length > 0 &&{" "}*/}
      
      <button onClick={cleanCart}>Limpiar Carrito</button>
      <h2>El total de la compra es : ${total} </h2>
      <button>Terminar compra</button>
    </div>
  ):<h1>El carrito esta vacio</h1>);
};

export default CartContainer;
