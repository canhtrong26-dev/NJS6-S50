'use client';

import Image from 'next/image';
import styles from './TipsTricks.module.scss';

const articles = [
  {
    id: 1,
    img: '/images/53abba51c795f73b89eadbfba6f49c31e29633ca.png',
    title: 'How to create a living room to love',
    date: '20 jan 2020',
  },
  {
    id: 2,
    img: '/images/00199a02de519eea2e3d7e620bfce30dd47c94ae.png',
    title: 'Solution for clean look working space',
    date: '10 jan 2020',
    featured: true,
  },
  {
    id: 3,
    img: '/images/ffd84bebc852aef31cbf398bbd77286168275c2d.png',
    title: 'Make your cooking activity more fun with good setup',
    date: '20 jan 2020',
  },
];

export default function TipsTricks() {
  return (
    <section className={styles.tipsTricks}>
      <h2 className={styles.title}>Tips & Tricks</h2>

      <div className={styles.articles}>
        {articles.map((article) => (
          <div
            key={article.id}
            className={`${styles.card} ${article.featured ? styles.featured : ''}`}
          >
            <div className={styles.cardImage}>
              <Image
                src={article.img}
                alt={article.title}
                fill
                sizes="391px"
                quality={85}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.cardInfo}>
              <h3>{article.title}</h3>
              <p>{article.date}</p>
            </div>
          </div>
        ))}
      </div>

     
      <button className={styles.prevBtn}>&#8249;</button>
      <button className={styles.nextBtn}>&#8250;</button>

     
      <div className={styles.indicator}>
        <span className={styles.dot}></span>
        <span className={`${styles.dot} ${styles.activeDot}`}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>

    </section>
  );
}