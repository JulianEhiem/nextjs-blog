import React from 'react';
import { Toolbar } from '@mui/material';
import styles from './app.module.css';
import Nav from './Nav/Nav';
import BlogBody from './Body/BlogBody';
import Footer from './Footer/Footer';

export default function App() {
  return (
    <div>
      <div className={styles.texture} />
      <div className={styles.appBackground}>
        <Nav />
        <Toolbar />
        <BlogBody />
        <Footer />
      </div>
    </div>
  );
}
