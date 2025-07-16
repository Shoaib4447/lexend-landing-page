import { features } from "../../data/features";
import styles from "./MoreFeatures.module.scss";

const MoreFeatures = () => {
  return (
    <section className={styles.moreFeaturesSection}>
      <h1 className={styles.heading}>More features</h1>
      <div className={styles.featureContainer}>
        {features.map((feature, index) => {
          const { Icon, title } = feature;
          return (
            <div className={styles.feature} key={index}>
              <div className={styles.iconCircle}>
                <Icon className={styles.Icon} />
              </div>
              <h3 className={styles}>{title}</h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MoreFeatures;
