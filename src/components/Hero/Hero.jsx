import styles from "./Hero.module.scss";
import { heroData } from "../../data/hero";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.heroText}>
        <span>Connect Instantly,</span>
        <br />
        <span className={styles.mainHeading}>Communicate Seamlessly</span>
      </h1>
      <p className={styles.description}>{heroData.description}</p>
      <div className={styles.heroCtaButtons}>
        <button className={styles.cta}>
          <MdOutlineMarkUnreadChatAlt className={styles.ctaIcon} />
          Get Started
        </button>
        <button className={styles.demo}>Free Watch Demo</button>
      </div>
    </section>
  );
};

export default Hero;
