import styles from "./Blogs.module.scss";
import images from "../../asserts/images";
import Blog from "./Blog";
const Blogs = () => {
  const { Post4, Post5, Post6 } = images;
  return (
    <section className={styles.insights}>
      <h3 className={styles.insights__title}>From the insights</h3>
      <div className={styles.blogFlex}>
        <Blog img={Post4} heading=' Team Solve Today Biggest Challenges' />
        <Blog img={Post5} heading=' Team Solve Today Biggest Challenges' />
        <Blog img={Post6} heading=' Team Solve Today Biggest Challenges' />
      </div>
    </section>
  );
};

export default Blogs;
