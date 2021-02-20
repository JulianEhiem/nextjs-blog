import Image from "next/image";
import styles from "./mainFeatured.module.css";

export default function MainFeatured() {
  return (
    <div className={`${styles.MainFeaturedContainer} ${ styles.blogBox}`}>
      <div className={styles.MfImageDiv}>
        <Image src="/reader.jpg" alt="Woman reading a book" layout="fill" />
      </div>
      <div className={styles.MfBlogHeadDiv}>
        <h1>Blogpost #1 - Featured</h1>
      </div>
      <div className={styles.MfBlogBodyDiv}>
        <p>
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
