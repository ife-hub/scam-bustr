'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.topBar}>
          <span>Get in touch</span>
          <span>help@scambustr.com</span>
        </div>
        <div className={styles.navInner}>
          <Link href="/" className={styles.logo} onClick={close}>
            SCAM<span>BUSTR</span>
          </Link>
          <ul className={styles.navLinks}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/consultation">Consultation</Link></li>
          </ul>
          <Link href="/consultation" className={styles.ctaBtn}>
            Free Consultation
          </Link>
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>
      </nav>

      {/* Full-screen mobile drawer */}
      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul className={styles.mobileLinks}>
          <li><Link href="/" onClick={close}>Home</Link></li>
          <li><Link href="/services" onClick={close}>Services</Link></li>
          <li><Link href="/about" onClick={close}>About</Link></li>
          <li><Link href="/contact" onClick={close}>Contact</Link></li>
          <li><Link href="/consultation" onClick={close}>Consultation</Link></li>
        </ul>
        <Link href="/consultation" className={styles.mobileCta} onClick={close}>
          Free Consultation
        </Link>
      </div>
    </>
  );
}