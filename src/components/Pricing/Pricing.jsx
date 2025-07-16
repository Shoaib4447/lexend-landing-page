import styles from "./Pricing.module.scss";

const Pricing = () => {
  return (
    <section className={styles.pricingSection}>
      <h1 className={styles.heading}>
        Seamless prices and <br /> scalable plans
      </h1>
      <div className={styles.planButtonDiv}>
        <div className={styles.planWidthDiv}>
          <button className={styles.monthlybtn}>Pay Monthly</button>
          <button className={styles.yearlybtn}>Pay Yearly</button>
        </div>
      </div>
      <div className={styles.cardsDiv}>
        <div className={styles}>starter</div>
        <div className={styles}>Pro</div>
        <div className={styles}>Business</div>
      </div>
      <div className={styles}>
        <p className={styles}>*Yearly discount available on select plans.</p>
        <div className={styles}>
          <div className={styles}>280+ Track of leads</div>
          <div className={styles}>90% Satisfied users</div>
          <div className={styles}>10.2k Team collaborations</div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
