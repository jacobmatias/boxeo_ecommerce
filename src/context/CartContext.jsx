import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let existe = cart.some((elemento) => elemento.id === product.id);
    if (existe) {
      let newArr = cart.map((elemento) => {
        if (product.id === elemento.id) {
          return {
            ...elemento,
            quantity: product.quantity,
          };
        } else {
          return elemento;
        }
      });

      setCart(newArr);
    } else {
      setCart([...cart, product]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };
  const deleteById = (id) => {
    let newArr = cart.filter((elem) => elem.id !== id);
    setCart(newArr);
  };

  //se ejecuta una vez x cada elemento 
  const totalQuantity = () => {
    let total = cart.reduce((acum,elem) => {
      return acum + elem.quantity
    }, 0)
    return total
  }

  const totalPrice = () => {
    let total = cart.reduce ( ( acum , elem) =>{
      return acum + (elem.price * elem.quantity)
    },0)
    return total
  }

  //dado un id , saber que cantidad hay

  const getQuantityById = (id) =>{
    
    let producto = cart.find( (elem) => elem.id=== +id)

    return producto?.quantity 
    //si el producto es true , pedile la cantidad , sino no trates de avanzar para que el codigo no se rompa,tec rendering
    //producto ? producto.quantity : producto
    //si producto existe , que devuelta producto.quantity sino que retorne undefined
  }

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteById,
    totalQuantity,
    totalPrice,
    getQuantityById 
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
