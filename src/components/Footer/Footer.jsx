import { footer } from "../../data/footer";
import images from "../../asserts/images";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <section className={styles.footerSection}>
      {/* Top Section */}
      <div className={styles.footerTop}>
        <div className={styles.footerBrand}>
          <img
            src={images.Logo}
            alt='Lexend logo'
            className={styles.footerLogo}
          />
          <p className={styles.footerDescription}>{footer.description}</p>
        </div>

        {/* Footer Columns */}
        <div className={styles.footerLinks}>
          {Object.entries(footer.links).map(([title, items], idx) => (
            <div className={styles.footerColumn} key={idx}>
              <h4 className={styles.footerColumnTitle}>{title}</h4>
              <ul className={styles.footerList}>
                {items.map((link, i) => (
                  <li key={i}>
                    <a href={link.href} className={styles.footerLink}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.footerBottom}>
        <p className={styles.footerCopyright}>{footer.copyright}</p>
        <div className={styles.footerSocials}>
          {footer.socials.map(({ Icon }, index) => (
            <a key={index} href='#' className={styles.socialIcon}>
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
