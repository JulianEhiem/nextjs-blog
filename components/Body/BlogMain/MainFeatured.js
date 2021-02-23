import Image from "next/image";
import styles from "./mainFeatured.module.css";
import { useContext } from "react";
import { PostContext } from "../../PostContext";
import BlockContent from '@sanity/block-content-to-react';


export default function MainFeatured() {

  const posts = useContext(PostContext);

  console.log(posts)

  console.log((posts[0] === undefined) ? 'nothing here' : posts[0].body[0] )
  return (
    <div className={`${styles.MainFeaturedContainer} ${ styles.blogBox}`}>
      <div className={styles.MfImageDiv}>
        <Image src="/reader.jpg" alt="Woman reading a book" layout="fill" />
        {/* <Image src={post.mappedPosts[0].mainImage} alt="Woman reading a book" layout="fill" /> */}
        {/* <img src={(post.mappedPosts[0] === undefined) ? 'Loading...' : post.mappedPosts[0].mainImage} width="100%" /> */}
      </div>
      <div className={styles.MfBlogHeadDiv}>
        {/* <h1>{(post.mappedPosts[0] === undefined) ? 'Loading...' : post.mappedPosts[0].title}</h1> */}
        <h1>zoom zoom</h1>
      </div>
      <div className={styles.MfBlogBodyDiv}>
        <p>
          {/* <BlockContent blocks = {(post.mappedPosts[0] === undefined) ? 'nothing here' : post.mappedPosts[0].{...body}}/> */}
          hello
        </p>
        {/* <p>
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
          Good and Evil) by
        </p> */}
      </div>
    </div>
  );
}
