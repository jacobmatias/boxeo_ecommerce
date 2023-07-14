import ItemListContainer from "./components/itemList/ItemListContainer";
import Navbar from "./components/layout/navBar/Navbar";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar/>}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
