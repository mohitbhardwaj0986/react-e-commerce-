import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cartProduct, setCartProduct] = useState([])
 
  

  return <CartContext.Provider value={[cartProduct, setCartProduct]}>{children}</CartContext.Provider>;
};

const useCartValue = () => {
  return useContext(CartContext);
};

export { CartProvider, CartContext, useCartValue };
