'use client';

import Image from 'next/image';
import styles from './Inspirations.module.scss';

const imgRoom1 = "/images/f89a66d94961c3801f4c07439f27b13468e5e545.png";
const imgRoom2 = "/images/acc48179d1b18b523420e79dda1e92951ecde49b.png";
const imgRoom3 = "/images/70655e8b25a06a33769af9bf5fe8f8ed81ce75d8.png";

export default function Inspirations() {
  return (
    <section className={styles.inspirations}>

     
      <div className={styles.left}>
        <h2>50+ Beautiful rooms inspiration</h2>
        <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
        <button className={styles.exploreBtn}>Explore More</button>
      </div>

     
      <div className={styles.right}>

        
        <div className={styles.mainImage}>
          <Image
            src={imgRoom1}
            alt="Bed Room"
            fill
            priority
            sizes="404px"
            quality={85}
            style={{ objectFit: 'cover' }}
            />
                    
          <div className={styles.infoBox}>
            <div className={styles.infoLabel}>
              <span>01</span>
              <span className={styles.line}></span>
              <span>Bed Room</span>
            </div>
            <h4>Inner Peace</h4>
            <button className={styles.arrowBtn}>→</button>
          </div>
        </div>

        
        <div className={styles.sideImages}>
          <div className={styles.sideImage}>
            <Image
            src={imgRoom2}
            alt="Room 2"
            fill
            sizes="372px"
            quality={85}
            style={{ objectFit: 'cover' }}
            />

        <Image
            src={imgRoom3}
            alt="Room 3"
            fill
            sizes="372px"
            quality={85}
            style={{ objectFit: 'cover' }}
        />
          </div>
          <div className={styles.sideImage}>
            <Image src={imgRoom3} alt="Room 3" fill sizes="372px" quality={85} style={{ objectFit: 'cover' }} />
          </div>
        </div>

       
        <div className={styles.indicator}>
          <span className={`${styles.dot} ${styles.activeDot}`}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>

       
        <button className={styles.nextBtn}>›</button>

      </div>

    </section>
  );
}