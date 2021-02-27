import Image from "next/image";
import styles from "./mainTop.module.css";
import { useContext } from "react";
import { PostContext } from "../../PostContext";
import BlockContent from '@sanity/block-content-to-react';
import dummyFallBack from '../../DummyFallBack'
import { useRouter } from "next/router"


export default function MainTop() {
  const router = useRouter();

  const posts = useContext(PostContext)
  const post = posts.mappedPosts

  const title = post.length === 0 ? "Loading" : post[1].title;
  const image = post.length === 0 ? "Loading" : post[1].mainImage;
  const body = post.length === 0 ? dummyFallBack : post[1].body;

  return (
    <div onClick = {() => router.push(`/post/${post[1].slug.current}`)} className={`${styles.MainTopContainer} ${ styles.blogBox}`}>
      <div className={styles.MtImageDiv}>
        {/* <Image src="/reader.jpg" alt="Woman reading a book" layout="fill" /> */}
        <img src={image} width="100%" />
      </div>
      <div className={styles.MtBlogHeadDiv}>
        {/* <h1>Blogpost #2 - MT</h1> */}
        <h1>{title}</h1>
      </div>
      <div className={styles.MtBlogBodyDiv}>
        <p>
        <BlockContent blocks={body}/>
          {/* You can import a file right in a JavaScript module. This tells webpack
          to s simply dummy text of the printing and typesetting industry. a
          type specimen book. It has survived not only five centuries...
          <br></br>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Bonorum et Malorum" (The Extremes of
          Good and Evil) by
          You can import a file right in a JavaScript module. This tells webpack
          to s simply dummy text of the printing and typesetting industry. a
          type specimen book. It has survived not only five centuries...
          <br></br>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Bonorum et Malorum" (The Extremes of
          Good and Evil) by
          You can import a file right in a JavaScript module. This tells webpack
          to s simply dummy text of the printing and typesetting industry. a
          type specimen book. It has survived not only five centuries...
          <br></br>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Bonorum et Malorum" (The Extremes of
          Good and Evil) by */}
        </p>
      </div>
    </div>
  );
}
