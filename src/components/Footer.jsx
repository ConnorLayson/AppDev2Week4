import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <a className="footer-brand" href="#">component<span>corner</span></a>
      <p>Good tech for the everyday.</p>
      <span className="footer-copyright">© {new Date().getFullYear()} ComponentCorner</span>
    </footer>
  );
}