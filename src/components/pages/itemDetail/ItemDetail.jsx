

const ItemDetail = ({product , agregarAlCarrito}) => {
  return (
    <div>
      <h1>{product.title}</h1>
      <h2>{product.price}</h2>
    </div>
  )
}

export default ItemDetail