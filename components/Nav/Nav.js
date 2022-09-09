import styles from "./nav.module.css";
import { useRouter } from 'next/router'
import {AppBar, Container, Toolbar } from "@mui/material";

export default function Nav() {
const router = useRouter();

  return (
    // <div className={styles.navContainer}>
    //   <div onClick={() => router.push('/')}> <h3>Home</h3> </div>
    //   <div target ="_blank" onClick={() => window.location.href = 'https://julianehiem.dev/'}> <h3>Portfolio</h3> </div>
    //   <div onClick={() => window.location.href = 'https://github.com/JulianEhiem'}> <h3>Github</h3> </div>
    // </div>
      <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>

            </Toolbar>
        </Container>
      </AppBar>
  );
}
