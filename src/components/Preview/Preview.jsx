import styles from "./Preview.module.scss";
import images from "../../asserts/images";

const Preview = () => {
  return (
    <>
      <section className={styles.previewSection}>
        <div className={styles.mainImage}>
          <img
            className={styles.previewImageMain}
            src={images.PreviewMain2}
            alt='Preview Section main image'
          />
        </div>
        <img
          className={styles.previewImageCall}
          src={images.PreviewCall}
          alt='Preview Section main image'
        />
        <img
          className={styles.previewImagePhone}
          src={images.PreviewPhone}
          alt='Preview Section main image'
        />
        <img
          className={styles.previewImageScan}
          src={images.PreviewScan}
          alt='Preview Section main image'
        />
      </section>
      <div className={styles.previewFeatures}>
        <div className={`${styles.previewFeaturesFlex}`}>
          <img src={images.Icon02} alt='' />
          <p>No Credit Card Required</p>
        </div>
        <div className={`${styles.previewFeaturesFlex}`}>
          <img src={images.Icon07} alt='' />
          <p>End-to-End Encryption</p>
        </div>
        <div className={`${styles.previewFeaturesFlex} ${styles.cuttingIcon}`}>
          <img src={images.Icon02} alt='' />
          <p>Cutting-edge AI features</p>
        </div>
      </div>
    </>
  );
};

export default Preview;
