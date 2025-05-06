import "./App.css";
import Product from "./Product.jsx";
import products from "../../data.json";
import Cart from "./Cart.jsx";
import ConfirmOrder from "./ConfirmOrder.jsx";
import { useState, useMemo } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [productCounts, setProductCounts] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = 0;
      return acc;
    }, {})
  );

  const resetStates = () => {
    setCartItems([]);
    setProductCounts(
      products.reduce((acc, product) => {
        acc[product.id] = 0;
        return acc;
      }, {})
    );
    setOrderConfirmed(false);
  };

  const [orderConfirmed, setOrderConfirmed] = useState(false);

  // Derive totalPrice from cartItems
  const totalPrice = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.count * item.price, 0);
  }, [cartItems]);

  const updateCart = (product) => {
    const newCount = product.count;
    const productPrice = product.price;

    setCartItems((prevItems) => {
      const existingProductIndex = prevItems.findIndex(
        (item) => item.id === product.id
      );

      let updatedItems = [...prevItems];

      if (existingProductIndex !== -1) {
        // Product exists in cart
        if (newCount === 0) {
          // Remove item from cart
          updatedItems.splice(existingProductIndex, 1);
        } else {
          // Update existing item
          updatedItems[existingProductIndex] = {
            id: product.id,
            name: product.name,
            price: productPrice,
            count: newCount,
          };
        }
      } else if (newCount > 0) {
        // Add new item to cart
        updatedItems = [
          ...prevItems,
          {
            id: product.id,
            name: product.name,
            price: productPrice,
            count: newCount,
          },
        ];
      }

      // Update product counts
      setProductCounts((prev) => ({
        ...prev,
        [product.id]: newCount,
      }));

      return updatedItems;
    });
  };

  const removeItem = (item) => {
    setCartItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
    setProductCounts((prev) => ({
      ...prev,
      [item.id]: 0,
    }));
  };

  return (
    <div className="app">
      {orderConfirmed && (
        <ConfirmOrder cartItems={cartItems} onClose={resetStates} />
      )}
      <div className="product-list">
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            category={product.category}
            imageUrl={product.image.desktop}
            name={product.name}
            price={product.price}
            count={productCounts[product.id]}
            cb={updateCart}
          />
        ))}
      </div>
      <Cart
        cartItems={cartItems}
        totalPrice={totalPrice}
        removeItem={removeItem}
        confirmOrder={() => setOrderConfirmed(true)}
      />
    </div>
  );
}

export default App;
