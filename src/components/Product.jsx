import { useState } from "react";
import "./Product.css";

function Product({ name, price, imageUrl, category, cb }) {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prev) => {
      const updated = prev + 1;
      cb({ name, price, count: updated }); // Notify parent
      return updated;
    });
  };

  const decreaseCount = () => {
    setCount((prev) => {
      const updated = Math.max(0, prev - 1);
      cb({ name, price, count: updated }); // Notify parent
      return updated;
    });
  };

  // //const handleAddToCart = () => {
  //   const product = {
  //     name: name,
  //     price: price,
  //     count: count,
  //   };
  //   cb(product); // Call the callback function to add the product to the cart
  // };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={imageUrl} alt={name} className="product-image" />
        {count === 0 ? (
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
            <span className="count">{count}</span>
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
