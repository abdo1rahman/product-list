import "./App.css";
import Product from "./Product.jsx";

function App() {
  return (
    <>
      <Product
        name="Product Name"
        price={29.99}
        imageUrl="..\..\assets\images\image-baklava-desktop.jpg"
        brand="Brand Name"
      />
    </>
  );
}

export default App;
