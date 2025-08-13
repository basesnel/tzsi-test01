import styles from "./styles.module.css";

const Image = ({ image }) => {
  return (
    <div className={styles.thumb}>
      {image ? (
        <picture>
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
    </div>
  );
};

export default Image;
