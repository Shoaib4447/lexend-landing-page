import styles from "./Feature.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";

const FeatureComponent = ({
  image,
  icon,
  heading,
  desc,
  buttonText,
  reverse = false,
}) => {
  return (
    <div className={`${styles.featureRow} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.imageContainer}>
        <img src={image} alt={heading} />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.iconWrapper}>{icon}</div>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.desc}>{desc}</p>
        <a href='#' className={styles.buttonWrapper}>
          <button className={styles.button}>{buttonText}</button>
          <FaArrowRightLong className={styles.arrowIcon} />
        </a>
      </div>
    </div>
  );
};

export default FeatureComponent;
