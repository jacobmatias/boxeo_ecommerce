import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";


const CardWidget = () => {
  return (
    <div>
      <Link to={"/cart"}>
      <Badge badgeContent={4} color="primary">
        <ShoppingCartIcon color="main" sx={{fontSize: 40}}/>
      </Badge>
      </Link>
    </div>
  );
};

export default CardWidget;
