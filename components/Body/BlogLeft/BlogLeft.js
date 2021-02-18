import styles from "./blogLeft.module.css";
import LeftTop from "./LeftTop";
import LeftBottom from "./LeftBottom";

export default function BlogLeft() {
  return (
    <div className={styles.blogLeftContainer}>
      <LeftTop />
      <LeftBottom />
    </div>
  );
}
