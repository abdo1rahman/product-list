import "./App.css";
import Product from "./Product.jsx";
import products from "../../data.json";
import Cart from "./Cart.jsx";
import { useState } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingProductIndex = prevItems.findIndex(
        (item) => item.name === product.name
      );

      if (existingProductIndex !== -1) {
        // Product exists — update count
        const updatedItems = [...prevItems];
        const updatedProduct = { ...updatedItems[existingProductIndex] };
        updatedProduct.count = updatedProduct.count + 1;
        updatedItems[existingProductIndex] = updatedProduct;
        return updatedItems;
      } else {
        // Product doesn't exist — add new
        return [...prevItems, { ...product, count: 1 }];
      }
    });

    setTotalPrice((prev) => prev + product.price);
  };

  return (
    <div className="app">
      <div className="product-list">
        {products.map((product) => (
          <Product
            key={product.id}
            category={product.category}
            imageUrl={product.image.desktop}
            name={product.name}
            price={product.price}
            brand={product.brand}
            cb={addToCart}
          />
        ))}
      </div>
      <Cart
        cartItems={cartItems}
        setCartItems={setCartItems}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
      />
    </div>
  );
}

export default App;
