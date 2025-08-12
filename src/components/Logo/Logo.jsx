import logo from "../../constants/logo";

import styles from "./styles.module.css";

const Logo = () => {
  const { label, logoWBP, logoPNG } = logo;

  return (
    <a href="#">
      <picture focusable="false" aria-hidden="true">
        <source srcSet={logoWBP} type="image/webp" />

        <img
          srcSet={logoPNG}
          src={logoPNG}
          alt={label}
          width={62}
          height={35}
          className={styles.image}
        />
      </picture>
    </a>
  );
};

export default Logo;
