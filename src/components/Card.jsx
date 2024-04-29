import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { useCartValue } from "../CartContext";
import { useSelector } from "react-redux";

function Card({ title, price, images, id }) {
  const [cartProduct, setCartProduct] = useCartValue();
  const products = useSelector((state) => state.products);
  const addToCart = () => {
    const product = products.find((product) => product.id === parseInt(id));
    if (product) {
      setCartProduct([...cartProduct, product]);
    }
  };

  return (
    <div className="card sm:w-[17vw] md:w-[50%] lg:w-[30%] xl:w-[21%] h-[55vh] p-4 rounded-sm mt-4">
      <div className="w-full h-[60%] ">
        <img
          className="w-full h-full object-cover object-center"
          src={images[0]}
          alt=""
        />
      </div>
      <div className="w-full h-[40%]  flex justify-start items-start flex-col">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-lg">
          {title}
        </h1>
        <div className="flex justify-between">
          <h1 className="w-[90%] text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg">
            Price: {price}
          </h1>
          <h1 className="text-3xl text-yellow-600 w-[10%]">****</h1>
        </div>
        <div className="flex gap-2 items-end">
          <button className="bg-blue-600 text-white px-6 rounded-sm ">
            <Link to={`/singleproduct/${id}`}> Detail</Link>
          </button>
          <button
            onClick={() => addToCart()}
            className="bg-green-600 text-white rounded-sm px-4"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
