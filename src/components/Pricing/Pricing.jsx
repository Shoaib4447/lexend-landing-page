import styles from "./Pricing.module.scss";
import { pricingPlans } from "../../data/pricing";
import { IoMdCheckmark } from "react-icons/io";

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
        {pricingPlans.map((plan, index) => {
          const { name, tag, price, period, billing, features, cta, note } =
            plan;
          return (
            <>
              <div
                className={`${
                  index === 1
                    ? `${styles.cardBackgroundColor} ${styles.card}`
                    : styles.card
                }`}
                key={index}
              >
                <div className={styles.pricingBox}>
                  <p className={styles.planName}>{name}</p>
                  <p className={styles.planTag}>{tag}</p>
                  <p className={styles.planPrice}>
                    <span className={styles.priceValue}>${price}</span>
                    <span className={styles.pricePeriod}> /{period}</span>
                  </p>
                  <p className={styles.billingCycle}>{billing}</p>
                </div>

                <div className={styles.featureSection}>
                  <p className={styles.featureHeading}>Standout features</p>
                  <ul className={styles.featureList}>
                    {features.map((feature, index) => (
                      <li key={index} className={styles.featureItem}>
                        <IoMdCheckmark className={styles.checkIcon} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`${styles.ctaButton} ${
                      index === 1 ? styles.ctaButtonHighlight : ""
                    }`}
                  >
                    {cta}
                  </button>
                  <p className={styles.note}> {note}</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className={styles.statsWrapper}>
        <p className={styles.statsNote}>
          *Yearly discount available on select plans.
        </p>

        <div className={styles.statsFlex}>
          <div className={styles.statItem}>
            280+ <p className={styles.statpara}>Track of leads</p>
          </div>
          <div className={styles.statItem}>
            90% <p className={styles.statpara}>Satisfied users</p>
          </div>
          <div className={styles.statItem}>
            10.2k <p className={styles.statpara}>Team collaborations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
