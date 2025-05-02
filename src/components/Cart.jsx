import "./Cart.css";
import emptyCart from "../../public/assets/images/illustration-empty-cart.svg";

function Cart({ cartItems, setCartItems, totalPrice, setTotalPrice }) {
  return (
    <div className="cart-container">
      <h2>Your Cart ({cartItems.length})</h2>
      {cartItems.length === 0 ? (
        <img src={emptyCart} alt="Empty Cart" />
      ) : (
        cartItems.map((item) => (
          <>
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
            <div className="cart-total">
              <h3>Total Price: ${totalPrice}</h3>
            </div>
          </>
        ))
      )}
    </div>
  );
}

export default Cart;
