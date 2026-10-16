import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ProductCard from "./components/ProductCard.jsx";
import CartItem from "./components/CartItem.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85",
    description: "Immersive sound, comfortable ear cups, and all-day listening."
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
    description: "Track your activity and stay connected wherever you go."
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85",
    description: "Portable, room-filling audio for your home or adventures."
  },
  {
    id: 4,
    name: "Laptop Stand",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=900&q=85",
    description: "A sturdy, ergonomic lift for a more comfortable workspace."
  },
  {
    id: 5,
    name: "4K Webcam",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85",
    description: "Look sharp on calls with crisp video and clear audio."
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=900&q=85",
    description: "Tactile typing, a clean design, and a satisfying feel."
  }
];

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    const cartEntry = {
      ...product,
      cartItemId: `${product.id}-${Date.now()}-${Math.random().toString(16).slice(2)}`
    };
    setCart((currentCart) => [...currentCart, cartEntry]);
  }

  function removeFromCart(cartItemId) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.cartItemId !== cartItemId)
    );
  }

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="app-shell">
      <Header cartCount={cart.length} />
      <main>
        <Hero />
        <section className="products-section" id="products">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE CORNER PICKS</p>
              <h2>Gear up for better days.</h2>
            </div>
            <p className="section-subtitle">Thoughtful tech for work, play, and everything between.</p>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        </section>

        <section className="cart-section" id="cart">
          <div className="cart-heading">
            <div>
              <p className="eyebrow">YOUR SELECTION</p>
              <h2>Your shopping cart</h2>
            </div>
            <span className="cart-item-count">{cart.length} {cart.length === 1 ? "item" : "items"}</span>
          </div>

          {cart.length === 0 ? (
            <div className="empty-cart">
              <span className="empty-cart-icon" aria-hidden="true">🛒</span>
              <h3>Your cart is taking a breather</h3>
              <p>Add something you love and it will show up here.</p>
              <a className="button button-primary" href="#products">Explore products</a>
            </div>
          ) : (
            <div className="cart-layout">
              <div className="cart-items">
                {cart.map((item) => (
                  <CartItem
                    key={item.cartItemId}
                    item={item}
                    onRemove={removeFromCart}
                  />
                ))}
              </div>
              <aside className="cart-summary">
                <h3>Order summary</h3>
                <div className="summary-row">
                  <span>Items ({cart.length})</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping</span>
                  <span className="free-shipping">FREE</span>
                </div>
                <div className="summary-total">
                  <span>Total</span>
                  <strong>${cartTotal.toFixed(2)}</strong>
                </div>
                <p className="summary-note">Taxes, if applicable, are calculated at checkout.</p>
              </aside>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}