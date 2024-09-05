import { Link } from "react-router-dom";
import styles from "./styles/Navbar.module.css";

function Navbar() {
  return (
    <div className="navbarContainer">
      {/*Left Side */}
      <div className={styles.left}>
        <div className={styles.logo}>
          <Link to="/" className={styles.logoLink}>
            Pixelpath
          </Link>
        </div>
        <div className={styles.navLinks}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/courses" className={styles.navLink}>
              Courses
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/blog" className={styles.navLink}>
              Blog
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/about" className={styles.navLink}>
              About
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/contact" className={styles.navLink}>
              Contact
            </Link>
          </li>
        </div>
        <div className={styles.btnGroup}> {/* Use styles.btnGroup instead of className */}
          <button className={`${styles.btn} ${styles.btnPrimary}`}>Login</button>
          <button className={`${styles.btn} ${styles.btnSecondary}`}>Apply</button>
        </div>
      </div>

      {/*Right side */}
      <div className={styles.right}></div>
    </div>
  );
}

export default Navbar;
