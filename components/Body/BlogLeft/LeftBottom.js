import styles from "./leftBottom.module.css";

export default function LeftBottom() {
  return (
    <div className={styles.LeftBottomContainer}>
      <div className={styles.LbBlogHeadDiv}>
        <h1>Blogpost #5 - LB</h1>
      </div>
      <div className={styles.LbBlogBodyDiv}>
        <p>
          You can import a file right in a JavaScript module. This tells webpack
          to s simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's...
          <br />
        </p>
      </div>
    </div>
  );
}
