import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { Button } from "../components";
import { useCartValue } from "../CartContext";

function SingleProduct() {
  const [singleProduct, setSingleProduct] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const products = useSelector((state) => state.products);

  const [cartProduct, setCartProduct] = useCartValue();

  useEffect(() => {
    const product = products.find((product) => product.id === parseInt(id));
    if (product) {
      setSingleProduct(product);
    }
  }, [products, id]);

  const addToCart = () => {
    const product = products.find((product) => product.id === parseInt(id));
    if (product) {
      setCartProduct([...cartProduct, product]);
    }
  };

  return (
    <div className="w-[90vw] m-auto flex justify-center gap-20 items-center">
      <div className="flex gap-5 ">
        <img
          className="w-[30vw]"
          src={singleProduct.images}
          alt={singleProduct.name}
        />
      </div>
      <div className="flex flex-col items-start gap-1 w-[50%]">
        <h1 className="text-xl">{singleProduct.title}</h1>
        <h2 className="text-xl">price: {singleProduct.price}</h2>
        <p>{singleProduct.description}</p>
        <div className="flex gap-2">
          <Button
            onClick={() => addToCart()} // Call addToCart function when the button is clicked
            className="bg-yellow-500 text-white text-sm cursor-pointer"
          >
            Add To Cart
          </Button>
          <Button
            onClick={() => navigate("/")}
            className="bg-blue-500 text-white text-sm cursor-pointer"
          >
            Shop More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
