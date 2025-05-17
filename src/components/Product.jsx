import "./Product.css";

function Product({ id, name, price, imageUrl, category, count, cb }) {
  const increaseCount = () => {
    cb({ id, name, price, count: count + 1 });
  };

  const decreaseCount = () => {
    cb({ id, name, price, count: Math.max(0, count - 1) });
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={`/${imageUrl}`}
          alt={name}
          className={`product-image ${count === 0 ? "" : "img-border"}`}
        />
        {count === 0 ? (
          <button className="add-to-cart-btn" onClick={increaseCount}>
            <img
              src="/assets/images/icon-add-to-cart.svg"
              alt="Add to cart icon"
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
              aria-label="Decrease quantity"
            >
              <span>-</span>
            </button>
            <span className="count">{count}</span>
            <button
              onClick={increaseCount}
              className="icon-count-btn"
              id="increase-btn"
              aria-label="Increase quantity"
            >
              <span>+</span>
            </button>
          </div>
        )}
      </div>
      <div className="product-details">
        <p className="brand">{category}</p>
        <h3 className="product-name">{name}</h3>
        <p className="product-price">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Product;
