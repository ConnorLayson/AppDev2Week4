import React from "react";
import "./Header.css";

export default function Header({ cartCount = 0 }) {
  return (
    <header className="site-header">
      <a className="brand" href="#" aria-label="ComponentCorner home">
        <span className="brand-mark">C</span>
        <span>component<span className="brand-accent">corner</span></span>
      </a>
      <nav className="header-nav" aria-label="Main navigation">
        <a href="#products">Shop</a>
        <a href="#cart" className="header-cart" aria-label={`Shopping cart with ${cartCount} items`}>
          <span className="cart-icon" aria-hidden="true">🛒</span>
          <span className="cart-label">Cart</span>
          <span className="cart-badge" aria-live="polite">{cartCount}</span>
        </a>
      </nav>
    </header>
  );
}