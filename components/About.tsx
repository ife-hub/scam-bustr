import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.inner}>
        <div className={styles.videoWrap}>
          <div className={styles.videoThumb}>
            <div className={styles.thumb} />
            {/* <button className={styles.playBtn} aria-label="Play video">
              <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button> */}
          </div>
        </div>

        <div className={styles.content}>
          <p className={styles.label}>WHO WE ARE</p>
          <h2 className={styles.heading}>
            ABOUT OUR<br /><strong>COMPANY</strong>
          </h2>
          <p className={styles.desc}>
            At Scam Bustr, we are not just a cybersecurity firm; we are architects of digital resilience,
            pioneers of chargeback solutions, and guardians of cyber intelligence. Established with a
            vision to redefine the landscape of cybersecurity, Scam Bustr has emerged as a global leader
            in providing comprehensive solutions to the evolving challenges of the digital era.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>500+</span>
              <span className={styles.statLabel}>Cases Resolved</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>24/7</span>
              <span className={styles.statLabel}>Support Available</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNum}>50+</span>
              <span className={styles.statLabel}>Countries Served</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}