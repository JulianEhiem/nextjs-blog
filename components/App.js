import styles from "./app.module.css";
import Nav from "./Nav/Nav";
import Title from "./Head/Title";
import BlogBody from "./Body/BlogBody";
import {Box, Container, Toolbar} from "@mui/material";
import Footer from "./Footer/Footer";
import OlderPosts from "../pages/OlderPosts";

export default function App() {
  return (
      <>
          <div className={styles.texture}></div>
          <div className={styles.appBackground}>
              <Nav />
              {/*<Title />*/}
              <Toolbar />
              <BlogBody />
              {/*<OlderPosts />*/}
              <Footer />
          </div>
      </>
  );
}
