import Image from "next/image";
import styles from "./mainBottom.module.css";

export default function MainBottom() {
  return (
    <div className={styles.MainBottomContainer}>
      <div className={styles.MbImageDiv}>
        <Image src="/reader.jpg" alt="Woman reading a book" layout="fill" />
      </div>
      <div className={styles.MbBlogHeadDiv}>
        <h1>Blogpost #3 - MB</h1>
      </div>
    </div>
  );
}
