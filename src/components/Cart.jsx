import "./Cart.css";
import emptyCart from "../../assets/images/illustration-empty-cart.svg";
import { useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <div className="cart-container">
      <h2>Your Cart ({cartItems.length})</h2>
      {cartItems.length === 0 ? (
        <img src="{emptyCart}" alt="Empty Cart" />
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-details">
              <h4>{item.name}</h4>
              <p>${item.price}</p>
            </div>
            <button
              onClick={() =>
                setCartItems(cartItems.filter((i) => i.id !== item.id))
              }
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}
