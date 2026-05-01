import Link from "next/link";
import styles from "./Process.module.css";

const STEPS = [
  {
    num: "01",
    title: "Case Evaluation",
    desc: "We conduct preliminary checks to assess whether your case has strong recovery potential, drawing on thousands of prior cases to give you an honest, informed assessment.",
  },
  {
    num: "02",
    title: "Investigation & Tracing",
    desc: "Using cutting-edge forensic tools and our global network, we identify and track the funds — mapping the fraud trail across banks, blockchains, and jurisdictions.",
  },
  {
    num: "03",
    title: "Recovery & Resolution",
    desc: "We take every available avenue to get your money back — chargebacks, legal proceedings, and direct negotiation. We fight until every option is exhausted.",
  },
];

export default function Process() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className="container">
          <div className={styles.twoCol}>
            <div className={styles.left}>
              <span className={styles.eyebrow}>/ HOW IT WORKS</span>
              <h2 className={styles.heading}>
                Our Proven
                <br />
                <span className={styles.accent}>Recovery Process</span>
              </h2>
              <p className={styles.sub}>
                From first contact to final resolution — a structured approach
                that has helped thousands reclaim what is rightfully theirs.
              </p>
              <Link href="/consultation" className={styles.btn}>
                Start Your Case →
              </Link>
            </div>

            <div className={styles.steps}>
              {STEPS.map((s, i) => (
                <div key={s.num} className={styles.step}>
                  <div className={styles.stepNum}>{s.num}</div>
                  <div className={styles.stepBody}>
                    <div className={styles.stepTitle}>{s.title}</div>
                    <div className={styles.stepDesc}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}