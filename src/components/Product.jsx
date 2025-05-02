import { useState } from "react";
import "./Product.css";

function Product({ name, price, imageUrl, category }) {
  const [cartCount, setCartCount] = useState(0);

  const increaseCount = () => setCartCount((prev) => prev + 1);
  const decreaseCount = () => {
    if (cartCount > 1) {
      setCartCount((prev) => prev - 1);
    } else {
      setCartCount(0); // Revert to "Add to Cart" state
    }
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={imageUrl} alt={name} className="product-image" />
        {cartCount === 0 ? (
          <button className="add-to-cart-btn" onClick={increaseCount}>
            <img
              src="../../assets/images/icon-add-to-cart.svg"
              alt="cart"
              className="icon"
            />
            <span>Add to Cart</span>
          </button>
        ) : (
          <div className="counter-btn">
            <button
              onClick={decreaseCount}
              className="icon-count-btn"
              id="decrease-btn"
            >
              <span>-</span>
            </button>
            <span className="count">{cartCount}</span>
            <button
              onClick={increaseCount}
              className="icon-count-btn"
              id="increase-btn"
            >
              <span>+</span>
            </button>
          </div>
        )}
      </div>
      <div className="product-details">
        <p className="brand">{category}</p>
        <h3 className="product-name">{name}</h3>
        <p className="product-price">${Math.floor(price) + 0.99}</p>
      </div>
    </div>
  );
}

export default Product;
