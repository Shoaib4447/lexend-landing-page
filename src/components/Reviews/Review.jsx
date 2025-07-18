import styles from "./Reviews.module.scss";

const Review = ({ img, quote, name, role }) => {
  return (
    <div className={styles.testimonialCard}>
      <img
        className={styles.testimonialImage}
        src={img}
        alt='image path wrong'
      />
      <p className={styles.testimonialQuote}>{quote}</p>
      <p className={styles.testimonialName}>{name}</p>
      <p className={styles.testimonialPosition}>{role}</p>
    </div>
  );
};

export default Review;
