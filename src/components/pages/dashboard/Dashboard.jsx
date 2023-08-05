import { Button } from "@mui/material";
import { db } from "../../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { products } from "../../../productsMock";

const Dashboard = () => {
    
    const rellenarBase= ()=>{
        let refColl=  collection(db,"products")
        products.forEach((prod) => {
            addDoc( refColl,prod )
        })
    }
    
    
    return( 
    <div>
        <h1>Administrador</h1>
        <Button variant="contained" onClick={rellenarBase}>Rellenar base de datos</Button>
    </div>
        )
};

export default Dashboard;
