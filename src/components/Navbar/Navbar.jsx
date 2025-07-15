import { navigation } from "../../data/navigation";
import styles from "./Navbar.module.scss";
import logo from "../../asserts/logo.svg";
import { FaBars, FaGlobe, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav className={styles.navContainer}>
      {/* ✅ Mobile Menu */}
      <div className={styles.mobileMenu}>
        <img src={logo} alt={navigation.alt} />

        <button
          className={styles.menuToggle}
          aria-label='Toggle menu'
          onClick={() => setShowLinks((prev) => !prev)}
        >
          {showLinks ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {showLinks && (
        <div className={styles.mobileLinks}>
          <ul className={styles.navLinks}>
            {navigation.links.map((navItem, index) => (
              <li key={index}>
                <a href={navItem.href}>{navItem.label}</a>
              </li>
            ))}
          </ul>
          <div className={styles.navActions}>
            <FaGlobe />
            <button type='button'>{navigation.buttons.download.label}</button>
          </div>
        </div>
      )}

      {/* ✅ Desktop Menu */}
      <div className={styles.desktopOnly}>
        <div>
          <img src={logo} alt={navigation.alt} />
        </div>

        <ul className={styles.navLinks}>
          {navigation.links.map((navItem, index) => (
            <li key={index}>
              <a href={navItem.href}>{navItem.label}</a>
            </li>
          ))}
        </ul>

        <div className={styles.navActions}>
          <FaGlobe />
          <button type='button'>{navigation.buttons.download.label}</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
