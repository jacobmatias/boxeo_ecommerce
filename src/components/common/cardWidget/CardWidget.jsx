import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <Link to={"/cart"}>
      <Badge badgeContent={0} color="primary" showZero>
        <ShoppingCartIcon color="main" sx={{ fontSize: 40 }} />
      </Badge>
    </Link>
  );
};

export default CartWidget;
