const CheckOut = ({ formulario }) => {
  
    const formulario2 = (evento)=>{
        evento.preventDefault();
        console.log(evento)
        console.log("CheckOutContainer function")
      }

    return (
    <div>
      <h1>CheckOut</h1>
      <form onSubmit={formulario2}>
        <input type="text" placeholder="Ingrese su nombre" name="nombre" />
        <input type="text" placeholder="Ingrese su apellido" name="apellido" />
        <button type="submit">Enviar</button>
        <button type="button">Cancelar</button>
      </form>
    </div>
  );
};

export default CheckOut;
