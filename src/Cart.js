
import React from 'react';
import { useCart } from './CartContext';


const Cart = React.memo(() => {
  const { cart } = useCart();

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
});

export default Cart;
