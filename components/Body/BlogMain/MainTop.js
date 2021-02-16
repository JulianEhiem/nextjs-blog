import Image from "next/image";
import styles from "./mainTop.module.css";

export default function MainTop() {
  return (
    <div className={styles.MainTopContainer}>
      <div className={styles.MtImageDiv}>
        <Image src="/reader.jpg" alt="Woman reading a book" layout="fill" />
      </div>
      <div className={styles.MtBlogHeadDiv}>
        <h1>Main top blog title that may be a few lines long</h1>
      </div>
    </div>
  );
}
