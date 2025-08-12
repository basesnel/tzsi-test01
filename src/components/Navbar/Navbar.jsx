import Logo from "../Logo/Logo";

import styles from "./styles.module.css";

const Navbar = ({ children }) => {
  return (
    <nav className={styles.navbar}>
      <Logo />
    </nav>
  );
};

export default Navbar;
