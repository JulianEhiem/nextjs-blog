import styles from "./leftTop.module.css";

export default function LeftTop() {
  return (
    <div className={`${styles.LeftTopContainer} ${ styles.blogBox}`}>
      <div className={styles.LtBlogHeadDiv}>
        <h1>Blogpost #4 - LT</h1>
      </div>
      <div className={styles.LtBlogBodyDiv}>
        <p>
          You can import a file right in a JavaScript module. This tells webpack
          to s simply nce the 1500s, when an unknown printer took a galley of
          t...
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Bonorum et Malorum" (The Extremes of
          Good and Evil) by
          You can import a file right in a JavaScript module. This tells webpack
          to s simply dummy text of the printing and typesetting industry. a
          type specimen book. It has survived not only five centuries...
          <br></br>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Bonorum et Malorum" (The Extremes of
          Good and Evil) by
          You can import a file right in a JavaScript module. This tells webpack
          to s simply dummy text of the printing and typesetting industry. a
          type specimen book. It has survived not only five centuries...
          <br></br>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Bonorum et Malorum" (The Extremes of
          Good and Evil) by
        </p>
      </div>
    </div>
  );
}
