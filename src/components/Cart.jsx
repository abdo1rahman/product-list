import "./Cart.css";
import emptyCart from "/assets/images/illustration-empty-cart.svg";

function Cart({ cartItems, totalPrice, removeItem }) {
  return (
    <div className="cart-container">
      <h2>
        Your Cart ({cartItems.reduce((sum, item) => sum + item.count, 0)})
      </h2>
      {cartItems.length === 0 ? (
        <img src={emptyCart} alt="Empty Cart" />
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-details">
                <h4>{item.name}</h4>
                <p>
                  ${item.price.toFixed(2)} x {item.count} = $
                  {(item.price * item.count).toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => removeItem(item)}
                aria-label={`Remove ${item.name} from cart`}
              >
                ✕
              </button>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
