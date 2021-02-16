import styles from "./app.module.css";
import Nav from "./Nav/Nav";
import Title from "./Head/Title";
import BlogBody from "./Body/BlogBody";

export default function App() {
  return (
    <div className={styles.appContainer}>
      <Nav />
      <Title />
      <BlogBody />
      <h1>App</h1>
    </div>
  );
}
