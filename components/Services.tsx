import Link from 'next/link';
import styles from './Services.module.css';

const services = [
  {
    icon: '🔍',
    title: 'Cybercrime and Financial Fraud',
    sub: 'Cybersecurity Consultations',
    desc: 'Expert analysis and response to cybercrime incidents and financial fraud cases.',
  },
  {
    icon: '💰',
    title: 'Stolen Funds Recovery',
    sub: 'Asset Tracing and Identification',
    desc: 'Strategic recovery of stolen assets using cutting-edge tracing technology.',
  },
  {
    icon: '🌐',
    title: 'International Jurisdiction Mastery',
    sub: 'Cross-border Legal Navigation',
    desc: 'Well-versed in navigating the complexities of international law and jurisdiction.',
  },
  {
    icon: '🏢',
    title: 'Corporate and Institutional Services',
    sub: 'Due Diligence and Risk Assessment',
    desc: 'Comprehensive corporate protection strategies and institutional risk management.',
  },
];

export default function Services() {
  return (
    <section className={styles.services}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.label}>WHAT WE DO</p>
          <h2 className={styles.heading}>
            OUR<br /><span>SERVICES</span>
          </h2>
          <p className={styles.intro}>
            Welcome to Scam Bustr, where trust, expertise, and tenacity converge to provide unparalleled
            services in the recovery of stolen funds on an international scale. With a team of seasoned
            legal professionals, cutting-edge technology, and a global network of contacts, we stand
            ready to pursue justice and restore what rightfully belongs to our clients.
          </p>
          <Link href="/services" className={styles.viewAll}>
            View all services <span>→</span>
          </Link>
        </div>

        <div className={styles.grid}>
          {services.map((s) => (
            <div key={s.title} className={styles.card}>
              <span className={styles.cardIcon}>{s.icon}</span>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardSub}>{s.sub}</p>
              <p className={styles.cardDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}