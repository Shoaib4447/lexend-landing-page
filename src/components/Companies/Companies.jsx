import styles from "./Companies.module.scss";
import images from "../../asserts/images";
const Companies = () => {
  return (
    <section className={styles.companySection}>
      <h3 className={styles.companyHeading}>
        Trusted by over most popular companies worldwide
      </h3>
      <div className={styles.companyLogos}>
        <img
          src={images.Brand01}
          alt='companies image'
          className={styles.companyLogo}
        />
        <img
          src={images.Brand03}
          alt='companies image'
          className={styles.companyLogo}
        />
        <img
          src={images.Brand05}
          alt='companies image'
          className={styles.companyLogo}
        />
        <img
          src={images.Brand07}
          alt='companies image'
          className={styles.companyLogo}
        />
      </div>
    </section>
  );
};

export default Companies;
