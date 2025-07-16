import styles from "./Process.module.scss";

const ProcessImage = ({ number, image, title, desc }) => {
  return (
    <>
      <div className={styles.processContainer}>
        <div className={styles.card}>
          <div className={styles.number}>{number}</div>
          <img className={styles.processImage} src={image} alt={title} />
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.desc}>{desc}</p>
        </div>
      </div>
    </>
  );
};

export default ProcessImage;
