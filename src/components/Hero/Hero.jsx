import styles from "./Hero.module.scss";
import { heroData } from "../../data/hero";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>{heroData.title}</h1>
      <h3>{heroData.subtitle}</h3>
      <button className={styles.cta}>Get Started</button>
    </section>
  );
}
