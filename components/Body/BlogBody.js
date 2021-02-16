import styles from "./blogBody.module.css";
import BlogRight from "./BlogRight/BlogRight";
import BlogLeft from "./BlogLeft/BlogLeft";
import BlogMain from "./BlogMain/BlogMain";

export default function BlogBody() {
  return (
    <div className={styles.blogBodyContainer}>
      <BlogMain />
      <BlogLeft />
      <BlogRight />
    </div>
  );
}
