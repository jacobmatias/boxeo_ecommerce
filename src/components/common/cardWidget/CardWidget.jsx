import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";


const CardWidget = () => {
  return (
    <div>
      <Link to={"/cart"}>
      <AddShoppingCartIcon color="inherit" fontSize="large"/>
      </Link>
    </div>
  );
};

export default CardWidget;
