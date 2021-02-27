import styles from "./rightBottom.module.css";
import { useContext } from "react";
import { PostContext } from "../../PostContext";
import BlockContent from '@sanity/block-content-to-react';
import dummyFallBack from '../../DummyFallBack'
import { useRouter } from "next/router"


export default function RightBottom() {
  const router = useRouter();

  const posts = useContext(PostContext)
  const post = posts.mappedPosts

  const title = post.length === 0 ? "Loading" : post[6].title;
  const image = post.length === 0 ? "Loading" : post[6].mainImage;
  const body = post.length === 0 ? dummyFallBack : post[6].body;

  return (
    <div onClick = {() => router.push(`/post/${post[6].slug.current}`)}  className={styles.RightBottomContainer}>
      <div className={styles.RbBlogHeadDiv}>
        {/* <h1>Blogpost #7 - RB</h1> */}
        <h1>{title}</h1>

      </div>
      <div className={styles.RbBlogBodyDiv}>
        <p>
        <BlockContent blocks={body}/>

          {/* You can import a file right in a JavaScript module. This tells webpack
          to s simply nce the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has survived
          not only five centuries...
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
