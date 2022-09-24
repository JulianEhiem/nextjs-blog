import styles from "./blogMain.module.css";
import MainTop from "./MainTop";
import BlogPageOne from "./BlogPageOne";
import MainBottom from "./MainBottom";

export default function BlogMain() {
  return (
    <div className={styles.blogMainContainer}>
      <BlogPageOne />
      <div className={styles.mainSubgroupContainer}>
        <MainTop />
        <MainBottom />
      </div>
    </div>
  );
}
