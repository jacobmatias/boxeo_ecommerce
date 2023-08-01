import { useState } from "react";
import Counter from "./Counter";

//a las propriedades les podemos poner valores por defecto , ej: stock = 1
const CounterContainer = ({ agregarAlCarrito, stock,cantidadEnCarrito=1 }) => {
  const [counter, setCounter] = useState(cantidadEnCarrito);

  return (
    <Counter
      counter={counter}
      setCounter={setCounter}
      agregarAlCarrito={agregarAlCarrito}
      stock={stock}
    />
  );
};

export default CounterContainer;
