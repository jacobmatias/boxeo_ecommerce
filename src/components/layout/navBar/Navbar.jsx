
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CardWidget from "../../common/cardWidget/CardWidget";
import { Grid } from "@mui/material";
import "./NavBar.css"
import { Center } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";




const Navbar = () => {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 10 }}>
            <Link to={"/"} color="white" >BALBOA'S STORE</Link>
            <Grid>
            
              <ul className="cointainerCategories">
              <Link to={"/category/guantes"}> 
              <li color="white">GUANTES</li>  
              </Link>
              <Link to={"/category/indumentaria"}>
              <li color="white">INDUMENTARIA</li>
              </Link>
              </ul>
              
            </Grid>
          </Typography>
          <CardWidget />
        </Toolbar>
      </AppBar>
    </Box>
    
    
      <Outlet/>
      </div>
    
    
    
  );
};

export default Navbar;
