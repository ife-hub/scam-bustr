'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import styles from './contact.module.css';

// ✅ Paste your EmailJS credentials here
const EMAILJS_SERVICE_ID  = 'namecheap_smtp';
const EMAILJS_TEMPLATE_ID = 'template_72idj4c';
const EMAILJS_PUBLIC_KEY  = 'h_AbclLxwxxX8Gsel';

const contactInfo = [
  {
    id: 'phone',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M5.5 4C5.5 4 4 4 4 5.5C4 7 4.5 10.5 8.5 14.5C12.5 18.5 16 19 17.5 19C19 19 19 17.5 19 17.5L20.5 14.5C20.5 14.5 19 13.5 17.5 13C16 12.5 15 13.5 15 13.5C15 13.5 13 11.5 12.5 10C12 8.5 13 7.5 13 7.5C13 7.5 13.5 6.5 13 5C12.5 3.5 11.5 2 11.5 2L8.5 3.5C8.5 3.5 5.5 4 5.5 4Z" stroke="white" strokeWidth="1.6" strokeLinejoin="round"/>
        <path d="M17 4C19.2 4.4 21.6 5.8 23 8" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M16 7C17.5 7.3 19 8.2 20 10" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Phone',
    value: '+1 (229) 472-3697',
    href: 'tel:+12294723697',
  },
  {
    id: 'email',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="6" width="22" height="16" rx="2" stroke="white" strokeWidth="1.6"/>
        <path d="M3 9L14 16L25 9" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    label: 'Email',
    value: 'help@scambustr.com',
    href: 'mailto:help@scambustr.com',
  },
  {
    id: 'address',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3C10.1 3 7 6.1 7 10C7 15.25 14 25 14 25C14 25 21 15.25 21 10C21 6.1 17.9 3 14 3Z" stroke="white" strokeWidth="1.6" strokeLinejoin="round"/>
        <circle cx="14" cy="10" r="3" stroke="white" strokeWidth="1.6"/>
      </svg>
    ),
    label: 'Address',
    value: '100 Park Avenue – Suite 2285, Midtown Manhattan (Grand Central Station) – New York, NY',
    href: null,
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email) {
      alert('Name and email are required.');
      return;
    }

    setStatus('loading');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone || 'N/A',
          message: form.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' }); // clear form
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <>
      <Navbar />
      <main className={styles.main}>

        {/* ── Page Header ── */}
        <div className={styles.pageHeader}>
          <div className={styles.pageHeaderInner}>
            <h1 className={styles.pageHeaderTitle}>Contact</h1>
            <nav className={styles.breadcrumb} aria-label="breadcrumb">
              <Link href="/">Home</Link>
              <span className={styles.breadcrumbSep}>›</span>
              <span>Contact</span>
            </nav>
          </div>
        </div>

        {/* ── Contact Info Cards ── */}
        <section className={styles.infoSection}>
          <div className={styles.infoGrid}>
            {contactInfo.map((item) => (
              <div key={item.id} className={styles.infoCard}>
                <div className={styles.infoIconWrap}>{item.icon}</div>
                <h3 className={styles.infoLabel}>{item.label}</h3>
                {item.href ? (
                  <a href={item.href} className={styles.infoValue}>{item.value}</a>
                ) : (
                  <p className={styles.infoValue}>{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── Contact Form ── */}
        <section className={styles.formSection}>
          <div className={styles.formCard}>
            <div className={styles.formIntro}>
              <p className={styles.formEyebrow}>GET IN TOUCH</p>
              <h2 className={styles.formHeading}>CONTACT US</h2>
              <p className={styles.formBlurb}>
                ScamBustr is your trusted partner in building resilient defenses
                against the ever-present challenges of the digital world.
              </p>
            </div>

            <div className={styles.formFields}>
              <div className={styles.fieldRow}>
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>Your Name (required)</label>
                  <input name="name" type="text" className={styles.fieldInput}
                    value={form.name} onChange={handleChange} required />
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>Your Email (required)</label>
                  <input name="email" type="email" className={styles.fieldInput}
                    value={form.email} onChange={handleChange} required />
                </div>
              </div>
              <div className={styles.fieldRow}>
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>Phone Number</label>
                  <input name="phone" type="tel" className={styles.fieldInput}
                    value={form.phone} onChange={handleChange} />
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>Your Message</label>
                  <textarea name="message" className={styles.fieldTextarea} rows={5}
                    value={form.message} onChange={handleChange} />
                </div>
              </div>

              <div className={styles.formFooter}>
                <button
                  type="button"
                  className={styles.sendBtn}
                  onClick={handleSubmit}
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Sending…' : 'Send'}
                </button>
                {status === 'success' && (
                  <p style={{ color: 'green', marginTop: 8 }}>✅ Message sent successfully!</p>
                )}
                {status === 'error' && (
                  <p style={{ color: 'red', marginTop: 8 }}>❌ Something went wrong. Please try again.</p>
                )}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}