import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { Badge } from "@mui/material";


const CardWidget = () => {
  return (
    <div>
      <Link to={"/cart"}>
      <Badge badgeContent={0} color="primary" showZero>
        <ShoppingCartIcon color="main" sx={{fontSize: 40}}/>
      </Badge>
      </Link>
    </div>
  );
};

export default CardWidget;
