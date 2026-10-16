import React from "react";
import "./CartItem.css";

export default function CartItem({ item, onRemove }) {
  return (
    <article className="cart-item">
      <img className="cart-item-image" src={item.image} alt="" />
      <div className="cart-item-details">
        <h3>{item.name}</h3>
        <p>${item.price.toFixed(2)}</p>
      </div>
      <button
        className="remove-cart-item"
        type="button"
        onClick={() => onRemove(item.cartItemId)}
        aria-label={`Remove ${item.name} from cart`}
      >
        Remove
      </button>
    </article>
  );
}