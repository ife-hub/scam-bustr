import styles from "./WhyUs.module.css";

const VALUES = [
  { icon: "◈", title: "Innovation", desc: "We deploy the latest forensic and tracing technology to stay ahead of increasingly sophisticated fraud schemes." },
  { icon: "⬡", title: "Integrity", desc: "Honest assessments from day one. If your case is unlikely to succeed, we tell you — no false promises, no wasted time." },
  { icon: "◎", title: "Result Driven", desc: "Our success is measured by yours. We pursue every available avenue and don't rest until every option is exhausted." },
  { icon: "⊕", title: "Intelligence", desc: "A global network of legal professionals, cybersecurity experts, and financial investigators working as one unified team." },
  { icon: "⊛", title: "Confidential", desc: "Every case is handled with complete discretion. Your personal and financial details are protected at every stage." },
  { icon: "✓", title: "Money-Back Guarantee", desc: "We stand behind our work. Our guarantee reflects the confidence we have in our recovery capabilities and processes." },
];

export default function WhyUs() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.eyebrow}>/ WHY SCAM BUSTR</span>
          <h2 className={styles.heading}>
            The Principles Behind
            <span className={styles.dim}> Our Success</span>
          </h2>
        </div>

        <div className={styles.statsBar}>
          {[
            { val: "4K+",  label: "Completed Cases" },
            { val: "$8M+", label: "USD Recovered" },
            { val: "67+",  label: "Countries Served" },
            { val: "3K+",  label: "Happy Clients" },
          ].map((s) => (
            <div key={s.label} className={styles.statItem}>
              <span className={styles.statVal}>{s.val}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.grid}>
          {VALUES.map((v) => (
            <div key={v.title} className={styles.card}>
              <span className={styles.cardIcon}>{v.icon}</span>
              <h3 className={styles.cardTitle}>{v.title}</h3>
              <p className={styles.cardDesc}>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}