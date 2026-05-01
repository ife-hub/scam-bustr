import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import styles from './about.module.css';

const values = [
  { label: 'Innovation' },
  { label: 'Integrity' },
  { label: 'Result Driven' },
  { label: 'Intelligence' },
  { label: 'Confidential' },
  { label: 'Money Back Guarantee' },
];

const stats = [
  { value: '4K+', label: 'Completed Cases' },
  { value: '8M+', label: 'USD Recovered Money' },
  { value: '67+', label: 'Countries Served' },
  { value: '3K+', label: 'Happy Clients' },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>

        {/* ── Page Header ── */}
        <div className={styles.pageHeader}>
          <div className={styles.pageHeaderInner}>
            <h1 className={styles.pageHeaderTitle}>About</h1>
            <nav className={styles.breadcrumb} aria-label="breadcrumb">
              <Link href="/">Home</Link>
              <span className={styles.breadcrumbSep}>›</span>
              <span>About</span>
            </nav>
          </div>
        </div>

        {/* ── About Section ── */}
        <section className={styles.aboutSection}>
          <div className={styles.aboutInner}>
            <div className={styles.aboutImageWrap}>
              <div className={styles.aboutImageFrame}>
                <div className={styles.aboutImagePlaceholder}>
                  <span className={styles.aboutImageText}>
                    ABOUT OUR<br />
                    <strong>COMPANY</strong>
                  </span>
                </div>
              </div>
            </div>

            <div className={styles.aboutContent}>
              <p className={styles.aboutBody}>
                At ScamBustr, we are not just a cybersecurity firm; we are architects of digital
                resilience, pioneers of chargeback solutions, and guardians of cyber intelligence.
                Established with a vision to redefine the landscape of cybersecurity, ScamBustr has
                emerged as a global leader in providing comprehensive solutions to the evolving
                challenges of the digital era.
              </p>
              <p className={styles.aboutBody}>
                Our mission is clear – to secure the future by fortifying businesses against the
                ever-growing threats in the digital realm. We believe in proactive defense,
                innovative strategies, and a relentless pursuit of excellence to empower our
                clients to navigate the complexities of the cyber landscape with confidence.
              </p>

              <ul className={styles.valuesList}>
                {values.map((v) => (
                  <li key={v.label} className={styles.valueItem}>
                    <span className={styles.valueCheck}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 7.5L5.5 10.5L11.5 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {v.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Stats / Trust Section ── */}
        <section className={styles.statsSection}>
          <div className={styles.statsSwoosh} />
          <div className={styles.statsInner}>
            <div className={styles.statsIcon}>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="16" r="10" stroke="#c0392b" strokeWidth="1.8"/>
                <line x1="20" y1="26" x2="20" y2="30" stroke="#c0392b" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="20" y1="4" x2="20" y2="0" stroke="#c0392b" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="32" y1="16" x2="36" y2="16" stroke="#c0392b" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="4" y1="16" x2="8" y2="16" stroke="#c0392b" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="28.5" y1="7.5" x2="31.3" y2="4.7" stroke="#c0392b" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="8.7" y1="27.3" x2="11.5" y2="24.5" stroke="#c0392b" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="11.5" y1="7.5" x2="8.7" y2="4.7" stroke="#c0392b" strokeWidth="1.8" strokeLinecap="round"/>
                <line x1="28.5" y1="24.5" x2="31.3" y2="27.3" stroke="#c0392b" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </div>
            <p className={styles.statsEyebrow}>WE ARE EXPERT</p>
            <h2 className={styles.statsHeading}>
              WHY YOU SHOULD TRUST US?
              <span className={styles.statsWatermark} aria-hidden="true">Statistics</span>
            </h2>

            <div className={styles.statsGrid}>
              {stats.map((s) => (
                <div key={s.label} className={styles.statCard}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Why Choose Us ── */}
          <div className={styles.chooseInner}>
            <div className={styles.chooseImageWrap}>
              <div className={styles.chooseImagePlaceholder}>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" opacity="0.3">
                  <rect x="8" y="20" width="64" height="40" rx="4" stroke="#c0392b" strokeWidth="2"/>
                  <rect x="16" y="28" width="20" height="14" rx="2" fill="#c0392b" opacity="0.4"/>
                  <rect x="44" y="28" width="20" height="14" rx="2" fill="#c0392b" opacity="0.4"/>
                  <line x1="8" y1="36" x2="72" y2="36" stroke="#c0392b" strokeWidth="1" strokeDasharray="4 4"/>
                  <circle cx="40" cy="64" r="4" fill="#c0392b" opacity="0.5"/>
                  <rect x="34" y="60" width="12" height="8" rx="2" stroke="#c0392b" strokeWidth="1.5"/>
                </svg>
              </div>
            </div>

            <div className={styles.chooseContent}>
              <p className={styles.chooseEyebrow}>WHY YOU</p>
              <h3 className={styles.chooseHeading}>CHOOSE US?</h3>
              <p className={styles.chooseBody}>
                Employing state-of-the-art tracing and recovery tools, we identify and offer
                assistance to businesses and individuals striving to recover funds lost to
                fraudulent activities. Our goal is to continually improve our efforts, and we
                stand prepared to assist you in your quest to reclaim what rightfully belongs
                to you.
              </p>
              <p className={styles.chooseBody}>
                With a global footprint, ScamBustr combines the strength of a worldwide network
                with an in-depth understanding of local nuances. Our diverse team of experts
                brings a wealth of experience to the table, tailoring our solutions to meet
                the unique challenges faced by businesses across different regions.
              </p>
              <Link href="/consultation" className={styles.chooseBtn}>
                Free Consultation →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}