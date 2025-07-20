import styles from "./Process.module.scss";
import images from "../../asserts/images";
import ProcessImage from "./ProcessImage";
import HeroCta from "../Hero/HeroCta";

const Process = () => {
  return (
    <section className={styles.processSection}>
      <div className={styles.container}>
        <div className={styles.processImageCompnent}>
          <ProcessImage
            number='1'
            image={images.HomeStep01}
            title='Download, create account'
            desc='Quickly download the app and create your account in seconds. No complicated registrations or lengthy forms—just simple, fast onboarding.'
          />
          <ProcessImage
            number='2'
            image={images.HomeStep02}
            title='Connect with your circle'
            desc='Automatically sync your contacts or manually add friends. Our intelligent network helps you connect seamlessly across multiple platforms.'
          />
          <ProcessImage
            number='3'
            image={images.HomeStep03}
            title='Start communicating'
            desc='Start chatting, make video calls, and share files instantly. Experience real-time communication with crystal-clear quality and ultimate privacy.'
          />
        </div>
        <div className={styles.PrcessCta}>
          <HeroCta primaryVariant='solid' secondaryVariant='text' />
        </div>
        {/* <div className={styles.PrcessCta}>
          <div className={styles.heroCtaButtons}>
            <button className={styles.cta}>
              <MdOutlineMarkUnreadChatAlt className={styles.ctaIcon} />
              {heroData.ctaPrimary}
            </button>
            <button className={styles.demo}>{heroData.ctaSecondary}</button>
          </div>
          <p className={styles.reviewText}>{heroData.reviewText}</p>
        </div> */}
      </div>
    </section>
  );
};

export default Process;
