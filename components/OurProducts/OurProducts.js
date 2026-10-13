'use client';

import Image from 'next/image';
import styles from './OurProducts.module.scss';

const products = [
  { id: 1, name: 'Syltherine', desc: 'Stylish cafe chair', price: 'Rp 2.500.000', oldPrice: 'Rp 3.500.000', label: '-30%', labelType: 'discount', img: '/images/1.png' },
  { id: 2, name: 'Leviosa', desc: 'Stylish cafe chair', price: 'Rp 2.500.000', oldPrice: null, label: null, labelType: null, img: '/images/2.png' },
  { id: 3, name: 'Lolito', desc: 'Luxury big sofa', price: 'Rp 7.000.000', oldPrice: 'Rp 14.000.000', label: '-50%', labelType: 'discount', img: '/images/3.png' },
  { id: 4, name: 'Respira', desc: 'Minimalist fan', price: 'Rp 500.000', oldPrice: null, label: 'New', labelType: 'new', img: '/images/4.png' },
  { id: 5, name: 'Grifo', desc: 'Night lamp', price: 'Rp 1.500.000', oldPrice: null, label: null, labelType: null, img: '/images/5.png' },
  { id: 6, name: 'Muggo', desc: 'Small mug', price: 'Rp 150.000', oldPrice: null, label: 'New', labelType: 'new', img: '/images/6.png' },
  { id: 7, name: 'Pingky', desc: 'Cute bed set', price: 'Rp 7.000.000', oldPrice: 'Rp 14.000.000', label: '-50%', labelType: 'discount', img: '/images/7.png' },
  { id: 8, name: 'Potty', desc: 'Minimalist flower pot', price: 'Rp 500.000', oldPrice: null, label: 'New', labelType: 'new', img: '/images/8.png' },
];

export default function OurProducts() {
  return (
    <section className={styles.ourProducts}>
      <h2 className={styles.title}>Our Products</h2>

      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>

            <div className={styles.cardImage}>
              <Image
                src={product.img}
                alt={product.name}
                fill
                sizes="285px"
                quality={85}
                style={{ objectFit: 'cover' }}
                />

              {product.label && (
                <span className={`${styles.label} ${product.labelType === 'new' ? styles.labelNew : styles.labelDiscount}`}>
                  {product.label}
                </span>
              )}

              <div className={styles.overlay}>
                <button className={styles.addToCart}>Add to cart</button>
                <div className={styles.actions}>
                  <span>Share</span>
                  <span>Like</span>
                </div>
              </div>
            </div>

            <div className={styles.cardInfo}>
              <h3>{product.name}</h3>
              <p>{product.desc}</p>
              <div className={styles.priceRow}>
                <span className={styles.price}>{product.price}</span>
                {product.oldPrice && <span className={styles.oldPrice}>{product.oldPrice}</span>}
              </div>
            </div>

          </div>
        ))}
      </div>

      <button className={styles.showMore}>Show More</button>
    </section>
  );
}