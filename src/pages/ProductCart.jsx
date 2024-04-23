import React, { useState } from "react";
import { useCartValue } from "../CartContext";

function ProductCart() {
  const [cartProduct, setCartProduct] = useCartValue();
  const [noOfItem, setNoOfItem] = useState(1);

  const removeProduct = (productId) => {
    const afterRemove = cartProduct.filter((item) => item.id !== productId);
    setCartProduct(afterRemove);
  };

  return (
    <div>
      {cartProduct.length >= 1 ? (
        cartProduct.map((item) => (
          <div key={item.id} className="max-w-4xl m-auto">
            <div className="flex justify-between font-semibold mt-5">
              <h4>Item</h4>
              <h4>Quantity</h4>
              <h4>Total</h4>
            </div>
            <div className="w-full h-24  flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div>
                  <img className="w-24" src={item.images} />
                </div>
                <div className="w-28">
                  <h2 className="text-xs">{item.title}</h2>
                  <h3 className="text-sm">{item.price}</h3>
                  <h3
                    onClick={() => removeProduct(item.id)}
                    className="text-red-500 cursor-pointer"
                  >
                    remove
                  </h3>
                </div>
              </div>
              <div>
                <h1 className="mr-44">
                  <input
                    type="text"
                    value={noOfItem}
                    onChange={(e) => setNoOfItem(e.target.value)}
                    className="inline-block w-5 items-center"
                  />
                </h1>
              </div>
              <div>
                <h1>{noOfItem*item.price}</h1>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h1 className=" text-3xl font-semibold flex mt-28 justify-center">
          No Item Yet !
        </h1>
      )}
    </div>
  );
}

export default ProductCart;
