import Image from "next/image";
import styles from "./mainFeatured.module.css";
import { useContext } from "react";
import { PostContext } from "../../PostContext";
import BlockContent from '@sanity/block-content-to-react';


export default function MainFeatured() {

  const dummyFallBack = [
    {
    "_key": "88ffaff2fd77",
    "_type": "block",
    "children": [
    {
    "_key": "4f88c75699e2",
    "_type": "span",
    "marks": [],
    "text": "What is Lorem Ipsum?"
    }
    ],
    "markDefs": [],
    "style": "h2"
    },
    {
    "_key": "98766fe27f3f",
    "_type": "block",
    "children": [
    {
    "_key": "07dbc3486fe80",
    "_type": "span",
    "marks": [
    "strong"
    ],
    "text": "Lorem Ipsum"
    },
    {
    "_key": "07dbc3486fe81",
    "_type": "span",
    "marks": [],
    "text": " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
    ],
    "markDefs": [],
    "style": "normal"
    },
    {
    "_key": "9c75c8cdde8d",
    "_type": "block",
    "children": [
    {
    "_key": "6629f4ec8e020",
    "_type": "span",
    "marks": [],
    "text": "Why do we use it?"
    }
    ],
    "markDefs": [],
    "style": "h2"
    },
    {
    "_key": "feb63b913664",
    "_type": "block",
    "children": [
    {
    "_key": "e50e00ddb4f00",
    "_type": "span",
    "marks": [],
    "text": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    }
    ],
    "markDefs": [],
    "style": "normal"
    },
    {
    "_key": "e4da6273ecb2",
    "_type": "block",
    "children": [
    {
    "_key": "6532f2130b360",
    "_type": "span",
    "marks": [],
    "text": "\n"
    }
    ],
    "markDefs": [],
    "style": "normal"
    },
    {
    "_key": "d4c17c672062",
    "_type": "block",
    "children": [
    {
    "_key": "7d6d0ec00d080",
    "_type": "span",
    "marks": [],
    "text": "Where does it come from?"
    }
    ],
    "markDefs": [],
    "style": "h2"
    },
    {
    "_key": "069c8517ed04",
    "_type": "block",
    "children": [
    {
    "_key": "574d7f6ec3150",
    "_type": "span",
    "marks": [],
    "text": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32."
    }
    ],
    "markDefs": [],
    "style": "normal"
    },
    {
    "_key": "d77a5c265ce2",
    "_type": "block",
    "children": [
    {
    "_key": "cc226e4e44550",
    "_type": "span",
    "marks": [],
    "text": "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
    }
    ],
    "markDefs": [],
    "style": "normal"
    }
    ]

  const posts = useContext(PostContext);
  // const useEffect = posts.useEffect;
  // useEffect;
  const post = posts.mappedPosts


  const title = post.length === 0 ? "Loading" : post[0].title;
  const image = post.length === 0 ? "Loading" : post[0].mainImage;
  const body = post.length === 0 ? dummyFallBack : post[0].body;

  console.log(title)
  console.log(image)
  console.log(body)
  

  // console.log((post[0] === undefined) ? 'nothing here' : post[0].title )
  return (
    <div className={`${styles.MainFeaturedContainer} ${ styles.blogBox}`}>
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

// export const getServerSideProps = async pageContext => {
//   const query = encodeURIComponent('*[ _type == "post" ]');
//   const url = `https://nttcyj7x.api.sanity.io/v1/data/query/production?query=${query}`;
//   const result = await fetch(url).then(res => res.json());

//   if (!result.result || !result.result.length) {
//     return {
//       props: {
//         posts: [],
//       }
//     }
//   } else {
//     return {
//       props: {
//         posts: result.result,
//       }
//     }
//   }
//   // console.log(posts)
// };
