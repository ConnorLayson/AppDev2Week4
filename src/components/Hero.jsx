import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-kicker">LESS CLUTTER. MORE POSSIBILITIES.</p>
        <h1>Good tech.<br /><span>Great everyday.</span></h1>
        <p className="hero-description">Discover clever essentials that make your desk, downtime, and daily routine work a little better.</p>
        <a className="hero-cta" href="#products">Explore the collection <span aria-hidden="true">→</span></a>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="hero-orbit orbit-one"></div>
        <div className="hero-orbit orbit-two"></div>
        <div className="hero-product-card">
          <span className="hero-product-symbol">⌁</span>
          <span className="hero-product-caption">DESIGNED FOR YOUR DAY</span>
        </div>
        <span className="hero-spark spark-one">✦</span>
        <span className="hero-spark spark-two">✧</span>
      </div>
    </section>
  );
}