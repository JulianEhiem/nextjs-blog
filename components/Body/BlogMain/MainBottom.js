import Image from "next/image";
import styles from "./mainBottom.module.css";

export default function MainBottom() {
  return (
    <div className={`${styles.MainBottomContainer} ${ styles.blogBox}`}>
      <div className={styles.MbImageDiv}>
        <Image src="/reader.jpg" alt="Woman reading a book" layout="fill" />
      </div>
      <div className={styles.MbBlogHeadDiv}>
        <h1>Blogpost #3 - MB</h1>
      </div>
      <div className={styles.MbBlogBodyDiv}>
        <p>
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
        </p>
      </div>
    </div>
  );
}
