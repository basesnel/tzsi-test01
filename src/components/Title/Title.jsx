import styles from "./styles.module.css";

const Title = ({ title }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
    </header>
  );
};

export default Title;
