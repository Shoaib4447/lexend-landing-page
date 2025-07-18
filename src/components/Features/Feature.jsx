import styles from "./Feature.module.scss";
import FeatureComponent from "./FeatureCompnent";
import { TbMessage } from "react-icons/tb";
import { FaShieldHalved } from "react-icons/fa6";
import { MdOutlineVideoCall, MdOutlineMarkUnreadChatAlt } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";
import images from "../../asserts/images";
import { heroData } from "../../data/hero";
import HeroCta from "../Hero/HeroCta";

const Feature = () => {
  return (
    <section className={styles.featureSection}>
      <FeatureComponent
        image={images.HomeFeature01}
        icon={<TbMessage />}
        heading='Instant Messaging'
        desc='Lightning-fast communication across devices. Send messages, photos, and files instantly with real-time delivery and read receipts.'
        buttonText="Let's find out Icon"
      />

      <FeatureComponent
        image={images.HomeFeature02}
        icon={<MdOutlineVideoCall />}
        heading='HD Video Calling'
        desc='Crystal-clear video connections worldwide.
        High-definition video calls with noise cancellation and seamless group video support.'
        buttonText='Learn more'
        reverse
      />

      <FeatureComponent
        image={images.HomeFeature03}
        icon={<FaShieldHalved />}
        heading='End-to-End Encryption'
        desc='Uncompromising privacy and security.
        Military-grade encryption protects every message and call, ensuring your conversations remain completely private.'
        buttonText='How privacy works'
      />

      <FeatureComponent
        image={images.HomeFeature04}
        icon={<TfiReload />}
        heading='Cross-Platform Sync'
        desc='Seamless experience across all devices.
        Synchronize conversations and media between smartphones, tablets, and desktops without missing a beat.'
        buttonText='Download app now'
        reverse
      />
      <HeroCta primaryVariant='solid' />
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
    </section>
  );
};

export default Feature;
