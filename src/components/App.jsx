import "./App.css";
import Product from "./Product.jsx";
import products from "../../data.json";
import Cart from "./Cart.jsx";
import ConfirmOrder from "./ConfirmOrder.jsx";
import ButtonCart from "./ButtonCart.jsx";
import { useState, useMemo } from "react";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [productCounts, setProductCounts] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = 0;
      return acc;
    }, {})
  );

  const [CartVisible, setCartVisible] = useState(false);
  const toggleCart = () => {
    setCartVisible((prev) => !prev);
  };

  const windowWidth = window.innerWidth;
  const isDesktop = windowWidth >= 1150;

  const resetStates = () => {
    setCartItems([]);
    setProductCounts(
      products.reduce((acc, product) => {
        acc[product.id] = 0;
        return acc;
      }, {})
    );
    setOrderConfirmed(false);
    setCartVisible(false);
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
        if (newCount === 0) {
          updatedItems.splice(existingProductIndex, 1);
        } else {
          updatedItems[existingProductIndex] = {
            id: product.id,
            name: product.name,
            price: productPrice,
            count: newCount,
            image: product.image, // Add image property
          };
        }
      } else if (newCount > 0) {
        updatedItems = [
          ...prevItems,
          {
            id: product.id,
            name: product.name,
            price: productPrice,
            count: newCount,
            image: product.image,
          },
        ];
      }

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
    <div style={{ display: "flex", flexDirection: "column" }}>
      {!isDesktop ? (
        <>
          <nav
            style={{
              position: "sticky",
              top: "0px",
              backgroundColor: "var(--lightest-rose)",
              padding: "10px 20px",
              marginBottom: "20px",
              marginTop: 0,
              width: "100dvw",
              zIndex: 1000,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              overflow: "hidden",
            }}
          >
            <h1 style={{ margin: 0, fontSize: "1.5rem" }}>Desserts</h1>

            <div style={{ display: "flex", alignItems: "center" }}>
              <ButtonCart
                count={cartItems.reduce((sum, item) => sum + item.count, 0)}
                onClick={toggleCart}
              />
            </div>
          </nav>
        </>
      ) : (
        <h1>Desserts</h1>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {CartVisible && !isDesktop && (
          <Cart
            cartItems={cartItems}
            totalPrice={totalPrice}
            removeItem={removeItem}
            confirmOrder={() => setOrderConfirmed(true)}
            overlay={true}
            onClose={toggleCart}
          />
        )}
        {orderConfirmed && (
          <ConfirmOrder
            cartItems={cartItems}
            onClose={resetStates}
            totalPrice={totalPrice}
          />
        )}
        <div className="header">
          <div className="app">
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
          </div>
          {isDesktop && (
            <Cart
              cartItems={cartItems}
              totalPrice={totalPrice}
              removeItem={removeItem}
              confirmOrder={() => setOrderConfirmed(true)}
              overlay={false}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
