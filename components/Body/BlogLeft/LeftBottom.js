import styles from "./leftBottom.module.css";

export default function LeftBottom() {
  return (
    <div className={`${styles.LeftBottomContainer} ${ styles.blogBox}`}>
      <div className={styles.LbBlogHeadDiv}>
        <h1>Blogpost #5 - LB</h1>
      </div>
      <div className={styles.LbBlogBodyDiv}>
        <p>
          You can import a file right in a JavaScript module. This tells webpack
          to s simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's...
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
          You can import a file right in a JavaScript module. This tells webpack
          to s simply dummy text of the printing and typesetting industry. a
          type specimen book. It has survived not only five centuries...
          <br></br>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Bonorum et Malorum" (The Extremes of
          Good and Evil) by
          <br />
        </p>
      </div>
    </div>
  );
}
