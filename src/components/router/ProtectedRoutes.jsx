import { Outlet } from "react-router-dom"



const ProtectedRoutes = () => {
  return (
    <div>
        <h2>Administrador</h2>
        <Outlet/>   
     </div>
  )
}

export default ProtectedRoutes