import styles from "./leftBottom.module.css";
import { useContext } from "react";
import { PostContext } from "../../PostContext";
import BlockContent from '@sanity/block-content-to-react';
import dummyFallBack from '../../DummyFallBack'
import { useRouter } from "next/router"


export default function LeftBottom() {
  const router = useRouter();

  const posts = useContext(PostContext)
  const post = posts.mappedPosts

  const title = post.length === 0 ? "Loading" : post[4].title;
  const image = post.length === 0 ? "Loading" : post[4].mainImage;
  const body = post.length === 0 ? dummyFallBack : post[4].body;

  return (
    <div onClick = {() => router.push(`/post/${post[4].slug.current}`)}  className={`${styles.LeftBottomContainer} ${ styles.blogBox}`}>
      <div className={styles.LbBlogHeadDiv}>
        {/* <h1>Blogpost #5 - LB</h1> */}
        <h1>{title}</h1>

      </div>
      <div className={styles.LbBlogBodyDiv}>
        <p>
        <BlockContent blocks={body}/>

          {/* You can import a file right in a JavaScript module. This tells webpack
          to s simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's...
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
          Good and Evil) by
          You can import a file right in a JavaScript module. This tells webpack
          to s simply dummy text of the printing and typesetting industry. a
          type specimen book. It has survived not only five centuries...
          <br></br>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Bonorum et Malorum" (The Extremes of
          Good and Evil) by */}
          <br />
        </p>
      </div>
    </div>
  );
}
