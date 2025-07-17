const Faq = () => {
  return (
    <div className={styles.faqItem} key={index}>
      <div className={styles.faqQuestionRow} onClick={() => toggleFaq(index)}>
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
};

export default Faq;
