import React from "react";
import "./ProductCard.css";

export default function ProductCard({ product, onAddToCart }) {
  const { name, price, image, description } = product;

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img className="product-image" src={image} alt={name} loading="lazy" />
        <span className="product-tag">CORNER PICK</span>
      </div>
      <div className="product-info">
        <div className="product-title-row">
          <h3>{name}</h3>
          <span className="product-price">${price.toFixed(2)}</span>
        </div>
        <p className="product-description">{description}</p>
        <button className="add-to-cart-button" type="button" onClick={() => onAddToCart(product)}>
          <span aria-hidden="true">＋</span> Add to Cart
        </button>
      </div>
    </article>
  );
}