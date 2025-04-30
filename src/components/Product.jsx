import React from "react";
import PropTypes from "prop-types";
import "./Product.css";

function Product(props) {
  const { name, price, imageUrl, brand } = props;
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <button>
        <img src="../../assets/images/icon-add-to-cart.svg" />
        Add to Cart
      </button>
      <p>{brand}</p>
      <h2 className="product-name">{name}</h2>
      <p className="product-price">${price.toFixed(2)}</p>
    </div>
  );
}

export default Product;
