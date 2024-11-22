import { useEffect } from "react";
import { useCartStore } from "../store";

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  useEffect(() => {
    console.log("I am cart component");
  });
  return (
    <div>
      <h2> Your Cart ({cart.length})</h2>
      <div>
        {cart.length === 0 ? (
          <p>No products in your cart.</p>
        ) : (
          <div>
            {cart.map((product) => (
              <div key={product.id}>
                <h2>{product.title}</h2>
                <h2>{product.price}</h2>
              </div>
            ))}
          </div>
        )}
      </div>
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
