import styles from "./Blogs.module.scss";

const Blog = ({ img, heading }) => {
  return (
    <div className={styles.insights__flex}>
      <div className={styles.insightCard}>
        <img src={img} alt={heading} className={styles.insightCard__img} />
        <h4 className={styles.insightCard__heading}>{heading}</h4>
        <button className={styles.insightCard__btn}>Read more</button>
      </div>
    </div>
  );
};

export default Blog;
