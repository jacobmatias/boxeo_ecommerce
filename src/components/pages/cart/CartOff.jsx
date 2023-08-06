

const CartOff = () => {
  const cloudinaryImageUrl = "https://res.cloudinary.com/dzouy7sc1/image/upload/v1691354002/ecommerce_boxeo/oP_rielbl.gif"; 
  return (
    <div>
         <h1>
       EL CARRITO ESTA VACIO
      </h1>
      <img
        src={cloudinaryImageUrl}
        alt="Imagen desde Cloudinary"
        style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' ,marginLeft: "400px"}} 
      />
     
    </div>
  );
};

export default CartOff;
