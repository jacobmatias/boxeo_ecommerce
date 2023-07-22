
import Navbar from "./components/layout/navBar/Navbar";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar/>}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
