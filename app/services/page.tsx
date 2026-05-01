import Link from 'next/link';
import Footer from '@/components/Footer';
import styles from './services.module.css';
import Navbar from '@/components/Navbar';

const services = [
  {
    id: 'binary-options',
    icon: '📈',
    title: 'Binary Options Scam',
    desc: 'Thousands of fraudulent binary options brokers appear every year and it\'s our mission to fight back. If you\'ve been scammed by your broker, please contact us as soon as possible. The sooner we confront them, the sooner we will be able to get your money back.',
  },
  {
    id: 'crypto',
    icon: '₿',
    title: 'Cryptocurrency Scam',
    desc: 'No matter how hard governments try to regulate it, the Cryptocurrency industry is still alive and kicking. Since the topic is quite ambiguous to the general public, frauds use it to scam people. If you fell into a Cryptocurrency scam, contact us now.',
  },
  {
    id: 'forex',
    icon: '📊',
    title: 'Forex Scam',
    desc: 'The Forex industry is one of the scammer\'s favorite grounds. Since the industry is generally known as a legitimate investment option, it is very hard for the average person to differentiate the scam brokers from the legitimate ones. Contact us now.',
  },
  {
    id: 'stock',
    icon: '🔍',
    title: 'Stock Trading',
    desc: 'Scammers prey on those seeking to make a quick buck and will lure us in with shady investment opportunities. If you suspect you\'ve lost money due to a fraudulent stock trading scam then contact us and we\'ll work to get your money back.',
  },
  {
    id: 'credit-card',
    icon: '💳',
    title: 'Credit Card Fraud',
    desc: 'Thousands of new credit card phishing scams emerge every year and it\'s our mission to fight back against the scammers in the names of our clients. If you\'ve fallen victim to one of the many credit card phishing scams out there, please contact us as soon as possible.',
    accent: true,
  },
  {
    id: 'property',
    icon: '🏠',
    title: 'Property Fraud',
    desc: 'Property scams vary greatly in how they are executed, but they all aim to steal money from unsuspecting individuals interested in renting, buying, or leasing a property. Fraudsters often pose as property owners, landlords, or real estate agencies.',
  },
  {
    id: 'romance',
    icon: '💬',
    title: 'Romance Scam',
    desc: 'Romance scammers con thousands of people out of their money every year, and their techniques are becoming ever more sophisticated. We believe that romance scam victims deserve justice, and we fight hard on their behalf to reunite them with their lost funds.',
  },
  {
    id: 'other',
    icon: '🎧',
    title: 'Other Scams',
    desc: 'If you\'ve been caught out by a financial or online scam, then you\'re not alone. Millions of dollars are lost every year to scams of all kinds. Here at ScamBustr, we work tirelessly on behalf of our clients to track down their stolen funds and the scammers themselves.',
  },
];

const steps = [
  {
    num: '01',
    title: 'Case Evaluation',
    desc: 'Performing preliminary checks to assess whether the case can result in a substantial recovery, based on our experience.',
  },
  {
    num: '02',
    title: 'Investigation & Tracing',
    desc: 'We use cutting-edge tracing and recovery tools to identify and provide assistance to both businesses and individuals in their endeavor to recover funds lost to fraudulent activities.',
  },
  {
    num: '03',
    title: 'Get your money back',
    desc: 'We take pride in our track record and assure you that we\'ll go to great lengths to get your money back.',
  },
];

export default function ServicesPage() {
  return (
    <>
        <Navbar />
        <main className={styles.main}>
      {/* ── Page Header ── */}
      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <h1 className={styles.pageHeaderTitle}>Services</h1>
          <nav className={styles.breadcrumb} aria-label="breadcrumb">
            <Link href="/">Home</Link>
            <span className={styles.breadcrumbSep}>›</span>
            <span>Services</span>
          </nav>
        </div>
      </div>

      {/* ── Section Intro ── */}
      <section className={styles.intro}>
        <div className={styles.introIcon}>
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
        <p className={styles.introEyebrow}>OUR EXPERT</p>
        <h2 className={styles.introHeading}>
          RECOVERY SERVICES
          <span className={styles.introWatermark} aria-hidden="true">Services</span>
        </h2>
      </section>

      {/* ── Service Cards ── */}
      <section className={styles.cards}>
        <div className={styles.cardGrid}>
          {services.map((s, i) => (
            <article
              key={s.id}
              className={`${styles.card} ${s.accent ? styles.cardAccent : ''}`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className={`${styles.cardIcon} ${s.accent ? styles.cardIconAccent : ''}`}>
                <span>{s.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <Link href="/consultation" className={styles.cardLink}>
                Get Help <span>→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className={styles.process}>
        <div className={styles.processSwoosh} />
        <div className={styles.processInner}>
          <div className={styles.introIcon} style={{ filter: 'brightness(1.4)' }}>
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
          <p className={styles.processEyebrow}>OUR PROCESS</p>
          <h2 className={styles.processHeading}>
            HOW IT WORKS?
            <span className={styles.processWatermark} aria-hidden="true">Process</span>
          </h2>

          <div className={styles.steps}>
            {steps.map((step) => (
              <div key={step.num} className={styles.step}>
                <span className={styles.stepNum}>{step.num}</span>
                <h4 className={styles.stepTitle}>{step.title}</h4>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
            <div className={styles.stepCta}>
              <Link href="/consultation" className={styles.stepCtaBtn}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

    </main>
    
      <Footer />
    </>
    
  );
}