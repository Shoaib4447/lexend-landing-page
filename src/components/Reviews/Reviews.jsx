import styles from "./Reviews.module.scss";
import images from "../../asserts/images";

const Reviews = () => {
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.testimonialCard}>
        <h3 className={styles.testimonialHeading}>
          What our clients <br /> sharing about us!
        </h3>
        <img
          className={styles.testimonialImage}
          src={images.Img04}
          alt='TestimonialImage'
        />
        <p className={styles.testimonialQuote}>
          “We’re looking for people who share our vision! Most of our time used
          to be taken up by most of alternate administrative work whereas now we
          can focus on building out to help our employees.”
        </p>
        <p className={styles.testimonialName}>Mark Zellers</p>
        <p className={styles.testimonialPosition}>CEO, Co-Founder.</p>
      </div>
    </section>
  );
};

export default Reviews;
