import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Welcome to our platform</h1>
      <button className={styles.cta}>Get Started</button>
    </section>
  );
}
