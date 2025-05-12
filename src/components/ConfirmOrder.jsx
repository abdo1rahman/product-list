import React from "react";

export default function ConfirmOrder({ cartItems, onClose }) {
  return (
    <div className="overlay">
      <div className="order-confirmation">
        <h2>Order Confirmed!</h2>
        <p>We hope you enjoy your food!</p>
        {cartItems.map((item) => (
          <div key={item.id} className="order-item">
            <img
              src={item.image.thumbnail}
              alt={item.name}
              className="order-image"
            />
            <div>
              <h4>{item.name}</h4>
              <span className="item-count">{item.count}x</span>
              <span className="price-per-item">@{item.price}</span>
            </div>
            <h4 className="item-total">
              ${(item.price * item.count).toFixed(2)}
            </h4>
          </div>
        ))}
        <button className="new-order-btn" onClick={onClose}>
          Start New Order
        </button>
      </div>
    </div>
  );
}
