import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CardWidget from "../../common/cardWidget/CardWidget";
import { Grid } from "@mui/material";
import "./NavBar.css"
import { Center } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 10 }}>
            BALBOA'S STORE
            <Grid>
              <ul className="cointainerCategories">
              <li>GUANTES</li>  
              <li>INDUMENTARIA</li>
              </ul>
            </Grid>
          </Typography>
          <CardWidget />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
