import "./App.css";
import Product from "./Product.jsx";
import products from "../../data.json";

function App() {
  return (
    <div className="app">
      {products.map((product) => (
        <Product
          key={product.id}
          category={product.category}
          imageUrl={product.image.desktop}
          name={product.name}
          price={product.price}
          brand={product.brand}
        />
      ))}
    </div>
  );
}

export default App;
