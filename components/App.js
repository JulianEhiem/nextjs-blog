import React from 'react';
import { Toolbar } from '@mui/material';
import dynamic from 'next/dynamic';
import styles from './app.module.css';
import Nav from './Nav/Nav';
import BlogBody from './Body/BlogBody';

const Footer = dynamic(() => import('./Footer/Footer'));

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
