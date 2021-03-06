import styles from "./blogRight.module.css";
import RightTop from "./RightTop";
import RightBottom from "./RightBottom";

export default function BlogRight() {
  return (
    <div className={styles.blogRightContainer}>
      <RightTop />
      <RightBottom />
    </div>
  );
}
