import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;