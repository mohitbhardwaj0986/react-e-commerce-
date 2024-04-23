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
    <div className="card w-[17vw] h-[45vh]  p-4 rounded-sm ">
      <div className="w-full h-[60%] ">
        <img className="w-full h-full object-cover object-center" src={images[0]} alt="" />
      </div>
      <div className="w-full h-[40%]  flex justify-start items-start flex-col">
        <h1>{title}</h1>
        <div className="flex justify-between">
          <h1 className="w-[90%]">price: {price}</h1>
          <h1 className="text-3xl text-yellow-600 w-[10%]">****</h1>
        </div>
        <div className="flex gap-2 items-end">
          <Button
    
          className="bg-blue-600 text-white px-6 rounded-sm text-sm">
           <Link to={`/singleproduct/${id}`}> Detail</Link>
          </Button>
          <Button
          onClick={() => addToCart()} 
          className="bg-green-600 text-white rounded-sm text-sm">
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
