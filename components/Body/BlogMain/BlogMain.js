import styles from "./blogMain.module.css";
import MainTop from "./MainTop";
import MainFeatured from "./MainFeatured";
import MainBottom from "./MainBottom";

export default function BlogMain() {
  return (
    <div className={styles.blogMainContainer}>
      <MainFeatured />
      <MainTop />
      <MainBottom />
    </div>
  );
}
