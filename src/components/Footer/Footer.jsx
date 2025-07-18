import { footer } from "../../data/footer";
import images from "../../asserts/images";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <section className={styles.footerSection}>
      {/* Top Section */}

      {/* CTA */}
      <div className={styles.cta}>
        <div className={styles.ctaText}>
          <h3 className={styles.ctaHeading}>Stay up to date!</h3>
          <p className={styles.ctaDescription}>
            Subscribe to our latest news, announcements, and articles.
          </p>
        </div>

        <div className={styles.ctaFormWrapper}>
          <form className={styles.ctaForm}>
            <div className={styles.inputWrapper}>
              <input
                type='email'
                placeholder='Your email..'
                className={styles.ctaInput}
              />
            </div>
            <div className={styles.formButtonWrapper}>
              <button className={styles.ctaButton}>Subscribe</button>
            </div>
          </form>
        </div>
      </div>

      {/* Brand */}
      <div className={styles.footerTop}>
        <div className={styles.footerBrand}>
          <img
            src={images.Logo}
            alt='Lexend logo'
            className={styles.footerLogo}
          />
          <p className={styles.footerDescription}>{footer.description}</p>

          <div className={styles.languageSelector}>
            <p className={styles.languageIcon}>
              <footer.language.icon />
            </p>
            <p className={styles.languageLabel}>{footer.language.label}</p>
            <span className={styles.languageDropdown}>
              <footer.language.dropdown />
            </span>
          </div>
        </div>

        {/* Footer Columns */}
        <div className={styles.footerLinks}>
          {footer.links.map((section, idx) => (
            <div className={styles.footerColumn} key={idx}>
              {section.title && (
                <h4 className={styles.footerColumnTitle}>{section.title}</h4>
              )}
              <ul className={styles.footerList}>
                {section.items.map((link, i) => (
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
