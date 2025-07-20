import styles from "./Hero.module.scss";
import { heroData } from "../../data/hero";
import reviewImg1 from "../../asserts/01.png";
import reviewImg2 from "../../asserts/02.png";
import reviewImg3 from "../../asserts/03.png";
import reviewImg4 from "../../asserts/04.png";
import reviewImg5 from "../../asserts/06.png";
import reviewImg6 from "../../asserts/08.png";
import reviewImg7 from "../../asserts/09.png";
import HeroCta from "./HeroCta";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.heroText}>
        <span>Connect Instantly,</span>
        <br />
        <span className={styles.mainHeading}>Communicate Seamlessly</span>
      </h1>
      <p className={styles.description}>{heroData.description}</p>
      <HeroCta />
      <div>
        <img
          className={styles.reviewImg1}
          src={reviewImg1}
          alt='hero Review Image 1'
        />
        <img
          className={styles.reviewImg2}
          src={reviewImg2}
          alt='hero Review Image 2'
        />
        <img
          className={styles.reviewImg3}
          src={reviewImg3}
          alt='hero Review Image 3'
        />
        <img
          className={styles.reviewImg4}
          src={reviewImg4}
          alt='hero Review Image 4'
        />
        <img
          className={styles.reviewImg5}
          src={reviewImg5}
          alt='hero Review Image 5'
        />
        <img
          className={styles.reviewImg6}
          src={reviewImg6}
          alt='hero Review Image 6'
        />
      </div>
    </section>
  );
};

export default Hero;
