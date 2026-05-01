import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Top divider swoosh (matches hero bottom) */}
      <div className={styles.swooshTop} />

      <div className={styles.inner}>
        {/* Brand column */}
        <div className={styles.brand}>
          <span className={styles.logo}>SCAM BUSTR</span>
          <p className={styles.brandDesc}>
            At Scam Bustr, we believe in proactive defense, innovative strategies,
            and a relentless pursuit of excellence to empower our clients to
            navigate the complexities of the cyber landscape with confidence.
          </p>
          <div className={styles.badges}>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>✦</span>
              <span>DMCA PROTECTED</span>
            </div>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>⬡</span>
              <span>SECTIGO SSL</span>
            </div>
          </div>
        </div>

        {/* Quick links */}
        <div className={styles.col}>
          <h4 className={styles.colHeading}>Company</h4>
          <nav className={styles.navList}>
            <Link href="/about" className={styles.navLink}>About Us</Link>
            <Link href="/services" className={styles.navLink}>Services</Link>
            <Link href="/case-studies" className={styles.navLink}>Case Studies</Link>
            <Link href="/blog" className={styles.navLink}>Intelligence Blog</Link>
            <Link href="/consultation" className={styles.navLink}>Free Consultation</Link>
          </nav>
        </div>

        {/* Business hours */}
        <div className={styles.col}>
          <h4 className={styles.colHeading}>Business Hours</h4>
          <p className={styles.hoursLine}>
            Our support available to help you{' '}
            <span className={styles.highlight}>24 hours</span> a day,{' '}
            <span className={styles.highlight}>365 days</span> in year.
          </p>
          <div className={styles.availBadge}>
            <span className={styles.dot} />
            Always Online
          </div>
        </div>

        {/* Contact */}
        <div className={styles.col}>
          <h4 className={styles.colHeading}>Contact</h4>
          <ul className={styles.contactList}>
            <li>
              <span className={styles.contactLabel}>Email</span>
              <a href="mailto:support@scambustr.com" className={styles.contactValue}>
                support@scambustr.com
              </a>
            </li>
            <li>
              <span className={styles.contactLabel}>Whatsapp</span>
              <a href="https://wa.me/12294723697" target="_blank" rel="noopener noreferrer" className={styles.contactValue}>
                +1 (229) 472‑3697
              </a>  
            </li>
            <li>
              <span className={styles.contactLabel}>Address</span>
              <address className={styles.contactValue}>
                100 Park Avenue – Suite 2285,<br />
                Midtown Manhattan (Grand Central Station)<br />
                New York, NY
              </address>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <p className={styles.copy}>
          © 2018 - {new Date().getFullYear()} Scam Bustr. All rights reserved.
        </p>
        <div className={styles.bottomLinks}>
          <Link href="/privacy" className={styles.bottomLink}>Privacy Policy</Link>
          <span className={styles.sep}>·</span>
          <Link href="/terms" className={styles.bottomLink}>Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}