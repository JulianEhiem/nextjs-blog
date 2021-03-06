import styles from "./leftTop.module.css";
import { useContext } from "react";
import { PostContext } from "../../PostContext";
import BlockContent from '@sanity/block-content-to-react';
import dummyFallBack from '../../DummyFallBack'
import { useRouter } from "next/router"


export default function LeftTop() {
  const router = useRouter();

  const posts = useContext(PostContext)
  const post = posts.mappedPosts

  const title = post.length === 0 ? "Loading" : post[3].title;
  const image = post.length === 0 ? "Loading" : post[3].mainImage;
  const body = post.length === 0 ? dummyFallBack : post[3].body;

  return (
    <div onClick = {() => router.push(`/post/${post[3].slug.current}`)}  className={`${styles.LeftTopContainer} ${ styles.blogBox}`}>
      <div className={styles.LtBlogHeadDiv}>
        {/* <h1>Blogpost #4 - LT</h1> */}
        <h1>{title}</h1>
      </div>
      <div className={styles.LtBlogBodyDiv}>
        <p>
        <BlockContent blocks={body}/>

          {/* You can import a file right in a JavaScript module. This tells webpack
          to s simply nce the 1500s, when an unknown printer took a galley of
          t...
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
