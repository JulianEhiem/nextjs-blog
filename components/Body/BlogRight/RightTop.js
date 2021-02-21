import styles from "./rightTop.module.css";

export default function RightTop() {
  return (
    <div className={`${styles.RightTopContainer} ${ styles.blogBox}`}>
      <div className={styles.RtBlogHeadDiv}>
        <h1>Blogpost #6 - RT</h1>
      </div>
      <div className={styles.RtBlogBodyDiv}>
        <p>
          You can import a file right in a JavaScript module. This tells webpack
          to s simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's...
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
