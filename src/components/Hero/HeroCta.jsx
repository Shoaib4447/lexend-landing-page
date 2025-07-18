import styles from "./Hero.module.scss";
import { heroData } from "../../data/hero";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import Button from "../Button/Button";

const HeroCta = ({ primaryVariant = "outline", secondaryVariant = "text" }) => {
  return (
    <>
      <div className={styles.heroCtaButtons}>
        <Button variant={primaryVariant} className={styles.ctaIcon}>
          <MdOutlineMarkUnreadChatAlt className={styles.ctaIcon} />
          {heroData.ctaPrimary}
        </Button>
        <Button variant={secondaryVariant} className={styles.demo}>
          {heroData.ctaSecondary}
        </Button>
        <button className={styles.demo}></button>
      </div>
      <p className={styles.reviewText}>{heroData.reviewText}</p>
    </>
  );
};

export default HeroCta;
