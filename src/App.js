
import React, { useRef } from 'react';
import { useCart } from './CartContext';
import Cart from './Cart';

const App = () => {
  const { addToCart } = useCart();
  const itemRef = useRef(null);

  const handleAddItem = () => {
    const item = itemRef.current.value;
    if (item) {
      addToCart(item);
      itemRef.current.value = '';
    }
  };

  return (
    <div>
      <h1>Shopping Cart Application</h1>
      <input ref={itemRef} type="text" placeholder="Enter item name" />
      <button onClick={handleAddItem}>Add Item to Cart</button>
      <Cart />
    </div>
  );
};

export default App;
