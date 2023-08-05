import { Routes,Route } from "react-router-dom";
import {routes} from "./menuRoutes"
import Layout from "../layout/Layout";
import Dashboard from "../pages/dashboard/Dashboard";
import ProtectedRoutes from "./ProtectedRoutes";





const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Nueva forma de mapeo de routes a traves de un arreglo para que sea mas dinamico , y mas profesional, 
        le vamos pasando un id , el path y Element(siempre en mayuscula) */}
        {routes.map(({id,path,Element}) => (
          <Route key={id} path={path} element={<Element/>}/>
        ))}
        </Route>
        
       {/* Ruta Dashboard privado  */}
        <Route element={<ProtectedRoutes/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Route>
    
    
    </Routes>
  );
};

export default AppRouter;
