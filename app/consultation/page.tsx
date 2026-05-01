'use client';

import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import styles from './consultation.module.css';

export default function ConsultationPage() {
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    amount_lost: '',
    country: '',
    scam_company: '',
    scam_type: '',
    case_outline: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.full_name || !form.email || !form.amount_lost || !form.country || !form.scam_company) {
      alert('Please fill in all required fields.');
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Server error');

      setStatus('success');
      setForm({
        full_name: '', email: '', phone: '', amount_lost: '',
        country: '', scam_company: '', scam_type: '', case_outline: '',
      });
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
            <h1 className={styles.pageHeaderTitle}>Free Consultation</h1>
            <nav className={styles.breadcrumb} aria-label="breadcrumb">
              <Link href="/">Home</Link>
              <span className={styles.breadcrumbSep}>›</span>
              <span>Consultation</span>
            </nav>
          </div>
        </div>

        {/* ── Consultation Form Section ── */}
        <section className={styles.formSection} style={{ marginTop: '4rem' }}>
          <div className={styles.formCard}>

            <div className={styles.formIntro}>
              <p className={styles.formEyebrow}>RECOVERY SERVICES</p>
              <h2 className={styles.formHeading}>FREE CONSULTATION</h2>
              <p className={styles.formBlurb}>
                Our experts at ScamBustr are ready to review your case.
                Please provide as much detail as possible regarding the incident
                so we can better assist with your recovery process.
              </p>
            </div>

            <div className={styles.formFields}>
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Full Name (*)</label>
                <input name="full_name" type="text" className={styles.fieldInput}
                  value={form.full_name} onChange={handleChange} required />
              </div>

              <div className={styles.fieldRow}>
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>Email (*)</label>
                  <input name="email" type="email" className={styles.fieldInput}
                    value={form.email} onChange={handleChange} required />
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>Phone Number</label>
                  <input name="phone" type="tel" className={styles.fieldInput}
                    value={form.phone} onChange={handleChange} />
                </div>
              </div>

              <div className={styles.fieldRow}>
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>Amount Lost (*)</label>
                  <input name="amount_lost" type="text" className={styles.fieldInput}
                    placeholder="e.g. $5,000" value={form.amount_lost} onChange={handleChange} required />
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>Country (*)</label>
                  <input name="country" type="text" className={styles.fieldInput}
                    value={form.country} onChange={handleChange} required />
                </div>
              </div>

              <div className={styles.fieldRow}>
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>Scam Company (*)</label>
                  <input name="scam_company" type="text" className={styles.fieldInput}
                    value={form.scam_company} onChange={handleChange} required />
                </div>
                <div className={styles.fieldGroup}>
                  <label className={styles.fieldLabel}>Choose a Scam Type</label>
                  <select name="scam_type" className={styles.fieldInput}
                    style={{ appearance: 'none' }} value={form.scam_type} onChange={handleChange}>
                    <option value="">Select an option</option>
                    <option value="crypto">Cryptocurrency Scam</option>
                    <option value="forex">Forex/Trading Scam</option>
                    <option value="romance">Romance Scam</option>
                    <option value="phishing">Phishing/Identity Theft</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Outline Your Case</label>
                <textarea name="case_outline" className={styles.fieldTextarea} rows={6}
                  placeholder="Provide details about the scam..."
                  value={form.case_outline} onChange={handleChange} />
              </div>

              <div className={styles.formFooter}>
                <button type="button" className={styles.sendBtn}
                  onClick={handleSubmit} disabled={status === 'loading'}>
                  {status === 'loading' ? 'Submitting…' : 'Submit Request'}
                </button>
                {status === 'success' && (
                  <p style={{ color: 'green', marginTop: 8 }}>✅ Request submitted successfully!</p>
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