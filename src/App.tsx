import { useEffect } from "react";
import "./App.css";
import Cart from "./component/Cart";
import { FakeData } from "./data/FakeData";
import { useCartStore } from "./store";

function App() {
  const addToCart = useCartStore((state) => state.addToCart);
  useEffect(() => {
    console.log("I am app component");
  });
  return (
    <>
      <h2>Products</h2>
      <div>
        {FakeData.map((data) => (
          <div key={data.id}>
            <h2>{data.title}</h2>
            <p>{data.price}</p>
            <button
              onClick={() =>
                addToCart({ id: data.id, title: data.title, price: data.price })
              }
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
      <Cart />
    </>
  );
}

export default App;
