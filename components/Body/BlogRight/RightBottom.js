import styles from "./rightBottom.module.css";

export default function RightBottom() {
  return (
    <div className={styles.RightBottomContainer}>
      <div className={styles.RbBlogHeadDiv}>
        <h1>Blogpost #7 - RB</h1>
      </div>
      <div className={styles.RbBlogBodyDiv}>
        <p>
          You can import a file right in a JavaScript module. This tells webpack
          to s simply nce the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has survived
          not only five centuries...
        </p>
      </div>
    </div>
  );
}
