import styles from "./title.module.css";
import { useContext } from 'react';
import {PostContext} from "../PostContext";

export default function Title() {

    const ttl = useContext(PostContext)  

  return (
    <div className={styles.titleContainer}>
      <h2>Latest posts</h2>
    </div>
  );
}
