import styles from "./Faqs.module.scss";
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { faqs } from "../../data/faqs";
const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className={styles.faqSection}>
      <h3 className={styles.faqHeading}>FAQ's</h3>
      {faqs.map((review, index) => {
        const { question, answer } = review;
        const isActive = activeIndex === index;

        return (
          <div className={styles.faqItem} key={index}>
            <div
              className={styles.faqQuestionRow}
              onClick={() => toggleFaq(index)}
            >
              <h4 className={styles.faqQuestion}>{question}</h4>
              <div className={styles.buttonWrapper}>
                <button className={styles.faqToggleButton}>
                  {isActive ? <RxCross2 /> : <FaPlus />}
                </button>
              </div>
            </div>
            {isActive && (
              <p
                className={`${styles.faqAnswer} ${
                  isActive ? styles.faqAnswerVisible : ""
                }`}
              >
                {answer}
              </p>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Faqs;
