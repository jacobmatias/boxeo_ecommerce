import { Link } from "react-router-dom";
import ProductCard from "../common/productCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <Link to={"/category/:id"}>
    <section style={{width:"100%" , display: "flex " , justifyContent: "space-evenly", flexWrap:"wrap" , paddingTop:"50px"}}>
      {items.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </section>
    </Link>
  );
};

export default ItemList;
