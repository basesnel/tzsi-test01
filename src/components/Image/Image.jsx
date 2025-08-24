import styles from "./styles.module.css";

const Image = ({ image }) => {
  return (
    <>
      {image ? (
        <picture className={styles.thumb}>
          <source srcSet={image.wbp} type="image/webp" />
          <img
            src={image.png}
            width={image.width}
            height={image.height}
            alt={image.label}
            className={styles.image}
          />
        </picture>
      ) : null}
    </>
  );
};

export default Image;
