import styles from './ChargeBackSection.module.css';

export default function ChargeBackSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.iconWrap}>
          <span className={styles.icon}>💡</span>
        </div>
        <p className={styles.label}>SEE WHAT WE OFFER</p>
        <h2 className={styles.heading}>Chargeback Solutions</h2>
        <p className={styles.desc}>
          In the dynamic world of commerce, chargebacks pose a significant threat to businesses.
          Scam Bustr stands as a beacon of expertise, offering global chargeback solutions that not
          only recover lost revenue but also implement proactive measures to prevent future financial
          losses. Our dedicated team of professionals combines advanced technologies with strategic
          insights to provide unparalleled chargeback management.
        </p>
      </div>
    </section>
  );
}