import { navigation } from "../../data/navigation";
import styles from "./Navbar.module.scss";
import logo from "../../asserts/logo.svg";
import { FaBars, FaGlobe } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className={styles.navContainer}>
      {/* ✅ Mobile View */}
      <div className={styles.mobileMenu}>
        <img src={logo} alt={navigation.alt} />

        <button className={styles.menuToggle} aria-label='Open menu'>
          <FaBars />
        </button>
      </div>

      {/* ✅ Desktop View */}
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
          <button type='button'>{navigation.buttons.login.label}</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
