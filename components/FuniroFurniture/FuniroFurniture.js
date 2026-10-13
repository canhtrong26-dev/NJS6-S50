'use client';

import Image from 'next/image';
import styles from './FuniroFurniture.module.scss';

const images = [
  { id: 1, src: '/images/11.png', alt: 'Room 1' },
  { id: 2, src: '/images/22.png', alt: 'Room 2' },
  { id: 3, src: '/images/33.png', alt: 'Room 3' },
  { id: 4, src: '/images/44.png', alt: 'Room 4' },
  { id: 5, src: '/images/55.png', alt: 'Room 5' },
  { id: 6, src: '/images/66.png', alt: 'Room 6' },
  { id: 7, src: '/images/77.png', alt: 'Room 7' },
  { id: 8, src: '/images/88.png', alt: 'Room 8' },
  { id: 9, src: '/images/99.png', alt: 'Room 9' },
];

export default function FuniroFurniture() {
  return (
    <section className={styles.funiroFurniture}>

      <div className={styles.title}>
        <p>Share your setup with</p>
        <h2>#FuniroFurniture</h2>
      </div>

      <div className={styles.grid}>
        <div className={`${styles.imgItem} ${styles.img1}`}>
          <Image src={images[0].src} alt={images[0].alt} fill sizes="274px" quality={85} style={{ objectFit: 'cover' }} />
        </div>
        <div className={`${styles.imgItem} ${styles.img2}`}>
          <Image src={images[1].src} alt={images[1].alt} fill sizes="451px" quality={85} style={{ objectFit: 'cover' }} />
        </div>
        <div className={`${styles.imgItem} ${styles.img3}`}>
          <Image src={images[2].src} alt={images[2].alt} fill sizes="295px" quality={85} style={{ objectFit: 'cover' }} />
        </div>
        <div className={`${styles.imgItem} ${styles.img4}`}>
          <Image src={images[3].src} alt={images[3].alt} fill sizes="290px" quality={85} style={{ objectFit: 'cover' }} />
        </div>
        <div className={`${styles.imgItem} ${styles.img5}`}>
          <Image src={images[4].src} alt={images[4].alt} fill sizes="425px" quality={85} style={{ objectFit: 'cover' }} />
        </div>
        <div className={`${styles.imgItem} ${styles.img6}`}>
          <Image src={images[5].src} alt={images[5].alt} fill sizes="381px" quality={85} style={{ objectFit: 'cover' }} />
        </div>
        <div className={`${styles.imgItem} ${styles.img7}`}>
          <Image src={images[6].src} alt={images[6].alt} fill sizes="344px" quality={85} style={{ objectFit: 'cover' }} />
        </div>
        <div className={`${styles.imgItem} ${styles.img8}`}>
          <Image src={images[7].src} alt={images[7].alt} fill sizes="178px" quality={85} style={{ objectFit: 'cover' }} />
        </div>
        <div className={`${styles.imgItem} ${styles.img9}`}>
          <Image src={images[8].src} alt={images[8].alt} fill sizes="258px" quality={85} style={{ objectFit: 'cover' }} />
        </div>
      </div>

    </section>
  );
}