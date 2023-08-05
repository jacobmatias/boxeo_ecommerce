import ProductCard from "../../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <section
      style={{
        height:"400px",
        width: "55%",
        display: "flex",
        justifyContent: "center",
        paddingTop: "15px",
        borderBlock:"50px",
        marginLeft:"220px",
        marginTop:"100px",
        
        
      }}
    >
      {items.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </section>
  );
};

export default ItemList;
