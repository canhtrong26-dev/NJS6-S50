'use client';

import Image from 'next/image';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>

      <nav className={styles.navbar}>
        <div className={styles.logo}>Funiro.</div>
        <div className={styles.menus}>
          <div className={styles.menuItem}><span>Products</span></div>
          <div className={styles.menuItem}><span>Rooms</span></div>
          <div className={styles.menuItem}><span>Inspirations</span></div>
        </div>
        <div className={styles.searchbar}>
          <Image src="/images/Ellipse.png" alt="search" width={20} height={20} />
          <input type="text" placeholder="Search for minimalist chair" />
        </div>
        <div className={styles.icons}>
          <Image src="/images/Cart.png" alt="cart" width={24} height={24} />
          <Image src="/images/Vector.png" alt="heart" width={24} height={24} />
          <Image src="/images/dc1748c7c9a9cc1158ec1f34860b53ee583176b0.png" alt="avatar" className={styles.avatar} width={40} height={40} />
        </div>
      </nav>

      <div className={styles.hero}>
        <div className={styles.heroLeft}></div>
        <div className={styles.heroRight}>
          <Image
            src="/images/49fc0429c4613af2a4e6c1b94a0bdbbb862009b2.jpg"
            alt="Sofa"
            className={styles.sofaImage}
            fill
            priority
            sizes="60vw"
            quality={85}
            />
        </div>
        <div className={styles.heroContent}>
          <h1>High-Quality<br />Furniture Just<br />For You</h1>
          <p>Our furniture is made from selected and best quality materials that are suitable for your dream home</p>
          <button className={styles.shopNow}>Shop Now</button>
        </div>
        <div className={styles.indicator}>
          <span className={`${styles.dot} ${styles.activeDot}`}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
        <div className={styles.navButtons}>
          <button className={styles.prevBtn}>&#8249;</button>
          <button className={styles.nextBtn}>&#8250;</button>
        </div>
        <div className={styles.infoBox}>
          <h4>Bohauss</h4>
          <p>Luxury big sofa 2-seat</p>
          <div className={styles.infoPrice}>
            <span>Rp 17.000.000</span>
            <span>&#8594;</span>
          </div>
        </div>
      </div>

    </header>
  );
}