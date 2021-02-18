import styles from "./leftTop.module.css";

export default function LeftTop() {
  return (
    <div className={styles.LeftTopContainer}>
      <div className={styles.LtBlogHeadDiv}>
        <h1>Blogpost #4 - LT</h1>
      </div>
      <div className={styles.LtBlogBodyDiv}>
        <p>
          You can import a file right in a JavaScript module. This tells webpack
          to s simply nce the 1500s, when an unknown printer took a galley of
          t...
        </p>
      </div>
    </div>
  );
}
