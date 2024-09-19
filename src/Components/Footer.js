// src/Footer.js
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer mt-3">
      <div className="footer-content">
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>Email: info@coalcontrol.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Clean Air St, Green City</p>
        </div>
        <div className="social-media">
          <h3>Follow Us</h3>
          <Link to="" className="social-link">Facebook</Link><br/>
          <Link to="" className="social-link">Twitter</Link><br/>
          <Link to="" className="social-link">LinkedIn</Link>
        </div>
        <div className="newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for the latest updates.</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
