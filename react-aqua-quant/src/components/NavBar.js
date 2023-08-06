import { Link, useLocation } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import styles from "./NavBar.module.css";
const NavBar = () => {
  const { pathname } = useLocation();
  return (
    <div className={styles.layout}>
      <div className={styles.logo}>LOGO</div>
      <div className={styles.menu}>
        <Link to="/">
          <div className={pathname === "/" ? styles.activeLink : styles.link}>
            <FormattedMessage id="Dashboard" />
          </div>
        </Link>
        <Link to="/bots">
          <div
            className={pathname === "/bots" ? styles.activeLink : styles.link}
          >
            <FormattedMessage id="Bots" />
          </div>
        </Link>
        <Link to="/order-history">
          <div
            className={
              pathname === "/order-history" ? styles.activeLink : styles.link
            }
          >
            <FormattedMessage id="Order History" />
          </div>
        </Link>
        <Link to="/settings">
          <div
            className={
              pathname === "/settings" ? styles.activeLink : styles.link
            }
          >
            <FormattedMessage id="Settings" />
          </div>
        </Link>
        <div className={styles.line}></div>
      </div>
      <div className={styles.board}>Board</div>
      <div className={styles.logout}>
        <FormattedMessage id="Log out" />
      </div>
    </div>
  );
};

export default NavBar;
