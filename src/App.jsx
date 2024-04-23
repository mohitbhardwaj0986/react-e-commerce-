import React, { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { fetchProducts } from "./store/productSlice.js";
import axios from "../src/axios/axios.js";
import { useDispatch } from "react-redux";
import Shop from "./store/Shop.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
import ProductCart from "./pages/ProductCart.jsx";
import Category from "./pages/Category.jsx";

function App() {
  const dispatch = useDispatch();

  const dataFetch = async () => {
    try {
      const response = await axios.get("/products");
      dispatch(fetchProducts(response.data));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    dataFetch();
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/category" element={<Category />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<ProductCart />} />
      </Routes>
    </div>
  );
}

export default App;
