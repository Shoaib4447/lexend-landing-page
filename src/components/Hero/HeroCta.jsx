import styles from "./Hero.module.scss";
import { heroData } from "../../data/hero";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";

const HeroCta = () => {
  return (
    <>
      <div className={styles.heroCtaButtons}>
        <button className={styles.cta}>
          <MdOutlineMarkUnreadChatAlt className={styles.ctaIcon} />
          {heroData.ctaPrimary}
        </button>
        <button className={styles.demo}>{heroData.ctaSecondary}</button>
      </div>
      <p>{heroData.reviewText}</p>
    </>
  );
};

export default HeroCta;
