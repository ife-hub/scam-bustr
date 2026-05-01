import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.main}>
      <span className={styles.code}>404</span>
      <h1 className={styles.title}>Page Not Found</h1>
      <p className={styles.sub}>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
      <Link href="/" className={styles.btn}>← Return Home</Link>
    </main>
  );
}