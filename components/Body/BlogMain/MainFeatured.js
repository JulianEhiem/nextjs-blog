import Image from "next/image";
import styles from "./mainFeatured.module.css";
import { useContext } from "react";
import { PostContext } from "../../PostContext";
import BlockContent from '@sanity/block-content-to-react';
import { useRouter } from "next/router"
import dummyFallBack from '../../DummyFallBack'


export default function MainFeatured() {
  const router = useRouter();

  const posts = useContext(PostContext)
  const post = posts.mappedPosts

  const title = post.length === 0 ? "Loading" : post[0].title;
  const image = post.length === 0 ? "Loading" : post[0].mainImage;
  const body = post.length === 0 ? dummyFallBack : post[0].body;

  // console.log(title)
  // console.log(image)
  // console.log(body)
  

  // console.log((post[0] === undefined) ? 'nothing here' : post[0].title )
  return (
    <div  onClick = {() => router.push(`/post/${post[0].slug.current}`)} className={`${styles.MainFeaturedContainer} ${ styles.blogBox}`}>
      <div className={styles.MfImageDiv}>
        {/* <Image src="/reader.jpg" alt="Woman reading a book" layout="fill" /> */}
        {/* <Image src={post.mappedPosts[0].mainImage} alt="Woman reading a book" layout="fill" /> */}
        {/* <img src={(post[0] === undefined) ? 'Loading...' : post[0].mainImage} width="100%" /> */}
        <img src={image} width="100%" />
      </div>
      <div className={styles.MfBlogHeadDiv}>
        <h1>{title}</h1>
        {/* <h1>zoom zoom</h1> */}
      </div>
      <div className={styles.MfBlogBodyDiv}>
        <p>
          {/* {({body} === undefined)? "Loading Blogpost...": <BlockContent blocks={body}/>} */}
          <BlockContent blocks={body}/>
          {/* hello */}
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

