import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.tagline}>SCAM BUSTR — Your Strategic Advantage in Security!</p>
        <h1 className={styles.heading}>
          RECOVERY<br />
          <span className={styles.accent}>SOLUTION</span>
        </h1>
        <p className={styles.description}>
          At Scam Bustr, we are not just a cybersecurity firm; we are architects of
          digital resilience, pioneers of chargeback solutions, and guardians of
          cyber intelligence.
        </p>
        <Link href="/consultation" className={styles.ctaBtn}>
          Get Started <span className={styles.arrow}>→</span>
        </Link>
      </div>
      <div className={styles.imageWrap}>
        <div className={styles.imageBg} />
        <div className={styles.imageCard}>
          <div className={styles.imagePlaceholder} />
        </div>
        <div className={styles.floatingBadge}>
          <span className={styles.badgeDot} />
          <span>Cyber Intelligence</span>
        </div>
      </div>
      <div className={styles.swoosh} />
    </section>
  );
}