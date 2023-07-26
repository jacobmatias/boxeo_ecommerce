import ItemDetailContainer from "../pages/itemDetail/ItemDetailContainer";
import ItemListContainer from "../pages/itemList/ItemListContainer";
import CartContainer from "../pages/cart/CartContainer";
import CheckOutContainer from "../pages/checkout/CheckOutContainer";


export const routes = [
    {
        id:"home",
        path:"/",
        Element: ItemListContainer
    },
    {
        id:"category",
        path:"/category/:categoryId" ,
        Element: ItemListContainer
    },{
        id:"itemDetail",
        path:"/itemDetail/:id",
        Element: ItemDetailContainer
    },{
        id:"cart",
        path:"/cart",
        Element: CartContainer
    },{
        id:"checkout",
        path:"/checkout",
        Element: CheckOutContainer
    }

    ]