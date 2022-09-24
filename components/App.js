import styles from "./app.module.css";
import Nav from "./Nav/Nav";
import Title from "./Head/Title";
import BlogBody from "./Body/BlogBody";
import {Box, Container} from "@mui/material";

export default function App() {
  return (
      <>
          <div className={styles.texture}></div>
          <div className={styles.appBackground}>
              <Nav />
              {/*<Title />*/}
              <BlogBody />
          </div>
          <Container maxWidth="xl" sx={{zIndex: 2}}>
              {/*<Nav />*/}
              {/*/!*<Title />*!/*/}
              {/*<BlogBody />*/}
          </Container>
      </>
  );
}
