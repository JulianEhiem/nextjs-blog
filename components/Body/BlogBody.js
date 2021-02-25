import styles from "./blogBody.module.css";
import BlogRight from "./BlogRight/BlogRight";
import BlogLeft from "./BlogLeft/BlogLeft";
import BlogMain from "./BlogMain/BlogMain";
import { useContext } from "react";
import { PostContext } from "../PostContext";
import BlockContent from '@sanity/block-content-to-react';
// import dummyFallBack from '../../DummyFallBack'

export default function BlogBody() {

  const posts = useContext(PostContext)
  const post = posts.mappedPosts

  // const title = post.length === 0 ? "Loading" : post[0].title;
  // const image = post.length === 0 ? "Loading" : post[0].mainImage;
  // const body = post.length === 0 ? dummyFallBack : post[0].body;

  return (
    <>
      <div className={styles.blogBodyContainer}>
        <BlogMain />
        <BlogLeft />
        <BlogRight />
      </div>
      <div className={styles.additionalPosts}>
        {post.length < 7 ? <h2>Nothing here</h2> :
        post.slice(6).map((p, index) => (
          <div key = {index} className={styles.additionalPostsContainer}>
            <div className={styles.additionalPostsImage}>
              <img src={p.mainImage} width="100%"/>
            </div>
            <div className={styles.additionalPostsTitle}>
              <h1>{p.title}</h1>
            </div>
            {/* <div className={styles.additionalPostsBody}>
              <p>
              <BlockContent blocks={p.body} className={styles.postsBody}/>
              </p>
            </div> */}
          </div>
        ))
        }
      </div>
    </>
  );
}
