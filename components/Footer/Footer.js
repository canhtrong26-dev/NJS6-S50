'use client';

import Image from 'next/image';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topLine}></div>

      <div className={styles.content}>

        <div className={styles.about}>
          <h3>Funiro.</h3>
          <p>Worldwide furniture store since 2020. We sell over 1000+ branded products on our website</p>
          <div className={styles.contact}>
            <span>📍</span>
            <span>Sawojajar Malang, Indonesia</span>
          </div>
          <div className={styles.contact}>
            <span>📞</span>
            <span>+6289 456 3455</span>
          </div>
          <p className={styles.website}>www.funiro.com</p>
        </div>

        <div className={styles.column}>
          <h4>Menu</h4>
          <ul>
            <li>Products</li>
            <li>Rooms</li>
            <li>Inspirations</li>
            <li>About Us</li>
            <li>Terms & Policy</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Account</h4>
          <ul>
            <li>My Account</li>
            <li>Checkout</li>
            <li>My Cart</li>
            <li>My catalog</li>
          </ul>
        </div>

        <div className={styles.column}>
          <h4>Stay Connected</h4>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>

        <div className={styles.newsletter}>
          <h4>Stay Updated</h4>
          <div className={styles.emailBox}>
            <input type="email" placeholder="Enter your email" />
            <button>➤</button>
          </div>
        </div>

      </div>
    </footer>
  );
}