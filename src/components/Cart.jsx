import "./Cart.css";
import emptyCart from "/assets/images/illustration-empty-cart.svg";

function Cart({ cartItems, totalPrice, removeItem }) {
  return (
    <div className="cart-container">
      <h2>
        Your Cart ({cartItems.reduce((sum, item) => sum + item.count, 0)})
      </h2>
      {cartItems.length === 0 ? (
        <img className="empty-cart-img" src={emptyCart} alt="Empty Cart" />
      ) : (
        <div className="cart-content">
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="price-details">
                      <span className="item-count">{item.count}x</span>
                      <span className="price-per-item">
                        @ ${item.price.toFixed(2)}
                      </span>
                      <span className="item-total">
                        ${(item.price * item.count).toFixed(2)}
                      </span>
                    </div>
                    <button
                      className="remove-btn"
                      onClick={() => removeItem(item)}
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      ✕
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="cart-total">
              <h3>Order Total </h3>
              <h2 className="order-total">${totalPrice.toFixed(2)}</h2>
            </div>
          </div>
          <div id="carbon-neutral" className="carbon-neutral">
            <img
              src="/assets/images/icon-carbon-neutral.svg"
              alt="Carbon neutral logo"
            />
            This is a <strong>carbon-neutral</strong> product
          </div>
          <button className="confirm">Confirm Order</button>
        </div>
      )}
      {/* <hr style={{ color: "hsl(14, 25%, 72%)" }} /> */}
    </div>
  );
}

export default Cart;
