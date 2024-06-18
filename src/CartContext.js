
import React, { createContext, useState, useContext, useCallback } from 'react';


const CartContext = createContext();


const useCart = () => useContext(CartContext);


const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = useCallback((item) => {
    setCart((prevCart) => [...prevCart, item]);
  }, []);

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, useCart };
