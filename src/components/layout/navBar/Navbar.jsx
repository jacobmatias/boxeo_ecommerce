import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CardWidget from "../../common/cardWidget/CardWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 5 }}>
            <Link to={"/"}>🥊</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 5 }}>
            <Link to={"/"}>Todos</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 5 }}>
            <Link to={"/category/guantes"}>Guantes</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 5 }}>
            <Link to={"/category/indumentaria"}>Indumentaria</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
            <Link to={"/dashboard"}>Modo Administrador</Link>
          </Typography> 
          <CardWidget />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
