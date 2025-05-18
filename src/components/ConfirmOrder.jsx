import React, { useEffect } from "react";
import "./ConfirmOrder.css";

export default function ConfirmOrder({ cartItems, onClose, totalPrice }) {
  useEffect(() => {
    document.body.style.overflow = "hidden"; // Disable scrolling
    return () => {
      document.body.style.overflow = "auto"; // Re-enable scrolling on unmount
    };
  }, []);

  return (
    <div className="overlay">
      <div className="order-confirmation">
        <h2>Order Confirmed!</h2>
        <p>We hope you enjoy your food!</p>
        <div className="order-summary">
          {cartItems.map(({ id, name, price, count }) => (
            <div key={id} className="order-item">
              <div style={{ display: "flex" }}>
                <div>
                  <h4>{name}</h4>
                  <div style={{ display: "flex", gap: "2rem" }}>
                    <span className="item-count" style={{ fontSize: "1rem" }}>
                      {count}x
                    </span>
                    <span
                      className="price-per-item"
                      style={{ fontSize: "1rem" }}
                    >
                      @{price.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <h2 className="item-total" style={{ fontSize: "1rem" }}>
                ${(price * count).toFixed(2)}
              </h2>
            </div>
          ))}
        </div>
        <div className="order-total">
          <p>Order Total</p>
          <h2 className="total-price">${totalPrice.toFixed(2)}</h2>
        </div>
        <button className="new-order-btn" onClick={onClose}>
          Start New Order
        </button>
      </div>
    </div>
  );
}
