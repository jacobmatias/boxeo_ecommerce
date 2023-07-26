import { useState } from "react";
import CheckOut from "./CheckOut";

const CheckOutContainer = () => {
  const [userData, setUserData] = (useState = {
    name: "",
    lastname: "",
  });

  

  const formulario = (evento) => {
  evento.preventDefalut();
  }

  const funcionInput = (event) => {
    setUserData({...userData,[event.target.name]: event.target.value});

  }

  

  return <CheckOut formulario={formulario} />;
};

export default CheckOutContainer;
