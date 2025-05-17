import "./ButtonCart.css";
export default function ButtonCart({ count, onClick }) {
  return (
    <button className="cart-btn" onClick={onClick}>
      <img src="/assets/images/Cart.png" alt="Cart icon" className="cart-img" />
      <span className="cart-count">{count}</span>
    </button>
  );
}
