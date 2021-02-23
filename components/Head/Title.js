import styles from "./title.module.css";
import { useContext } from 'react';
import {PostContext} from "../PostContext";

export default function Title() {

    const ttl = useContext(PostContext)  

  return (
    <div className={styles.titleContainer}>
      <h1>hi</h1>
    </div>
  );
}
