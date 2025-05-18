import "./Cart.css";
import emptyCart from "/assets/images/illustration-empty-cart.svg";

function Cart({
  cartItems,
  totalPrice,
  removeItem,
  confirmOrder,
  overlay,
  onClose,
}) {
  return (
    <div className={overlay ? "overlay" : ""}>
      <div>
        {/* {overlay ? <button className="exit-btn remove-btn">X</button> : null} */}
        <div className={overlay ? "cart-overlay" : "cart-container"}>
          <div className="cart-header">
            <h2>
              Your Cart ({cartItems.reduce((sum, item) => sum + item.count, 0)})
            </h2>
          </div>
          {cartItems.length === 0 ? (
            <>
              <img
                className="empty-cart-img"
                src={emptyCart}
                alt="Empty Cart"
              />
              {overlay ? (
                <button className="exit-btn" onClick={onClose}>
                  Continue Browsing
                </button>
              ) : null}
            </>
          ) : (
            <>
              <div className="cart-content">
                <div>
                  {cartItems.map((item) => (
                    <>
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
                      <hr
                        style={{
                          border: "0.001px solid hsl(6, 32.00%, 81.00%)",
                          marginTop: "1rem",
                        }}
                      />
                    </>
                  ))}
                  <div className="cart-total">
                    <h3>Order Total </h3>
                    <h1 id="order-total">${totalPrice.toFixed(2)}</h1>
                  </div>
                </div>
                <div id="carbon-neutral" className="carbon-neutral">
                  <img
                    src="/assets/images/icon-carbon-neutral.svg"
                    alt="Carbon neutral logo"
                  />
                  This is a <strong>carbon-neutral</strong> product
                </div>
                <div className="end-dialogue">
                  <button className="confirm" onClick={confirmOrder}>
                    Confirm Order
                  </button>
                  {overlay ? (
                    <button className="exit-btn" onClick={onClose}>
                      Continue Browsing
                    </button>
                  ) : null}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
