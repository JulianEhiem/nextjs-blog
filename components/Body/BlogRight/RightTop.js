import styles from "./rightTop.module.css";

export default function RightTop() {
  return (
    <div className={styles.RightTopContainer}>
      <div className={styles.RtBlogHeadDiv}>
        <h1>Understanding Props</h1>
      </div>
      <div className={styles.RtBlogBodyDiv}>
        <p>
          You can import a file right in a JavaScript module. This tells webpack
          to s simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's...
        </p>
      </div>
    </div>
  );
}
