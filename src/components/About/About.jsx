import styles from "./About.module.scss";
import images from "../../asserts/images";
import Button from "../Button/Button";
const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutRow}>
        <img
          className={styles.interLockImg}
          src={images.Brand08}
          alt='brand08'
        />
        <p className={styles.desc}>
          “We are based in Europe and the latest Data Protection Regulation
          forces us to look for service suppliers than comply with this
          regulation and as we look to create our website and this builder just
          outstanding!”
        </p>
        <div className={styles.aboutPersonDiv}>
          <div className={styles.ceoImgDiv}>
            <img className={styles.aboutPersonImg} src={images.Img03} alt='' />
          </div>
          <div className={styles.ceoContentDiv}>
            <h3 className={styles.sarahEdriss}>Sarah Edrissi</h3>
            <p className={styles.leadMarketing}>Lead Marketing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
