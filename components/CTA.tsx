import Link from 'next/link';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.cta}>
      <div className={styles.inner}>
        <div className={styles.icon}>⚔️</div>
        <div className={styles.text}>
          <h2>Join us as we navigate the digital frontier together,<br />securing tomorrow, today.</h2>
          <p>At Scam Bustr, we are not just defenders; we are partners in your digital journey.</p>
        </div>
        <Link href="/consultation" className={styles.btn}>
          Free Consultation
        </Link>
      </div>
      <div className={styles.topSwoosh} />
    </section>
  );
}